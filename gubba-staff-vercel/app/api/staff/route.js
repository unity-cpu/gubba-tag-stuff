// Simple in-memory store (resets on cold starts / redeploys)
// For production, replace with Vercel KV, Postgres, or a database.

let staff = {
  title: "\\\\ GUBBA TAG STAFF //",
  roles: {
    FOUNDERS: ["UNITY", "UNITY"],
    "CO FOUNDERS": ["FROG", "SOT BUNNY"],
    OWNERS: ["CRACK"],
    "CO OWNERS": [],
    "STAFF MANAGER": [],
    PLAYFAB: [],
    "COMMUNITY MANAGER": [],
    "HEAD ADMIN": [],
    ADMIN: [],
    "TRIAL ADMIN": [],
    "HEAD MOD": [],
    MOD: [],
    "TRIAL MOD": [],
  },
};

export async function GET() {
  return Response.json(staff);
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { role, name } = body;

    if (!role || !name) {
      return Response.json({ error: "role and name required" }, { status: 400 });
    }

    if (!staff.roles[role]) {
      staff.roles[role] = [];
    }

    // Allow duplicates only if intentional (like UNITY twice)
    staff.roles[role].push(name.trim());

    return Response.json(staff);
  } catch (e) {
    return Response.json({ error: "Invalid request" }, { status: 400 });
  }
}

export async function DELETE(request) {
  try {
    const body = await request.json();
    const { role, name } = body;

    if (!role || !name) {
      return Response.json({ error: "role and name required" }, { status: 400 });
    }

    if (staff.roles[role]) {
      // Remove only the first matching name
      const idx = staff.roles[role].indexOf(name);
      if (idx !== -1) {
        staff.roles[role].splice(idx, 1);
      }
    }

    return Response.json(staff);
  } catch (e) {
    return Response.json({ error: "Invalid request" }, { status: 400 });
  }
}
