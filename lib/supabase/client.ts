import { createBrowserClient } from "@supabase/ssr";

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}

// Types pour l'authentification
export type AuthUser = {
  id: string;
  email: string;
  name?: string;
  role: "ADMIN" | "HOS" | "CLOSER" | "SETTER" | "EXPERT" | "CLIENT";
  avatar?: string;
};

// Fonction helper pour récupérer l'utilisateur courant
export async function getCurrentUser(): Promise<AuthUser | null> {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return null;

  // Récupérer les données supplémentaires depuis la table users
  const { data: userData } = await supabase
    .from("users")
    .select("*")
    .eq("id", user.id)
    .single();

  if (!userData) return null;

  return {
    id: user.id,
    email: user.email!,
    name: userData.name,
    role: userData.role,
    avatar: userData.avatar,
  };
}

// Fonction pour se déconnecter
export async function signOut() {
  const supabase = createClient();
  await supabase.auth.signOut();
}

// Fonction pour se connecter
export async function signIn(email: string, password: string) {
  const supabase = createClient();
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw error;
  return data;
}

// Fonction pour créer un compte
export async function signUp(email: string, password: string, name: string) {
  const supabase = createClient();
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        name,
      },
    },
  });

  if (error) throw error;
  return data;
}
