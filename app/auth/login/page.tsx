"use client";

import { useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Mail, Lock, AlertCircle, Loader2 } from "lucide-react";

export default function LoginPage() {
  const supabase = createClientComponentClient();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      console.log("1. Tentative de connexion...");
      
      const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password: password,
      });

      console.log("2. Résultat auth:", { authData, authError });

      if (authError) {
        console.error("Erreur auth:", authError);
        setError("Email ou mot de passe incorrect");
        setLoading(false);
        return;
      }

      if (!authData.user) {
        setError("Erreur de connexion");
        setLoading(false);
        return;
      }

      console.log("3. User connecté:", authData.user.id);

      const { data: profile, error: profileError } = await supabase
        .from("users")
        .select("role")
        .eq("email", authData.user.email)
        .single();

      console.log("4. Profil:", { profile, profileError });

      if (profileError || !profile) {
        console.error("Erreur profil:", profileError);
        setError("Profil introuvable");
        setLoading(false);
        return;
      }

      console.log("5. Rôle trouvé:", profile.role);

      const roleRedirects: Record<string, string> = {
        ADMIN: "/admin",
        CLIENT: "/client",
        COMMERCIAL: "/commercial",
        EXPERT: "/expert",
      };

      const redirectPath = roleRedirects[profile.role] || "/client";
      
      console.log("6. Redirection vers:", redirectPath);

      await new Promise(resolve => setTimeout(resolve, 500));

      window.location.replace(redirectPath);

    } catch (err: any) {
      console.error("7. Erreur catch:", err);
      setError("Erreur: " + err.message);
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2C3E50] to-[#34495E] flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold">
              <span className="text-[#E67E22]">DÉCLIC</span>
              <span className="text-[#2C3E50]">-Entrepreneurs</span>
            </h1>
            <p className="text-gray-500 mt-2">Connectez-vous à votre espace</p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
              <AlertCircle className="text-red-500 flex-shrink-0 mt-0.5" size={18} />
              <p className="text-sm text-red-700">{error}</p>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Adresse email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="jerome@declic-entrepreneurs.fr"
                  required
                  disabled={loading}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E67E22] focus:border-transparent disabled:bg-gray-50 disabled:cursor-not-allowed"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Mot de passe
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  disabled={loading}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E67E22] focus:border-transparent disabled:bg-gray-50 disabled:cursor-not-allowed"
                />
              </div>
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-[#E67E22] hover:bg-[#D35400] text-white py-3 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 animate-spin" size={18} />
                  Connexion en cours...
                </>
              ) : (
                "Se connecter"
              )}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <Link href="/" className="text-sm text-gray-600 hover:text-[#E67E22]">
              ← Retour à l'accueil
            </Link>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-3 gap-4 text-center text-white">
          <div>
            <p className="text-2xl font-bold text-[#E67E22]">+500</p>
            <p className="text-xs text-gray-300">Entrepreneurs</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-[#E67E22]">8 000€</p>
            <p className="text-xs text-gray-300">Économie moyenne</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-[#E67E22]">98%</p>
            <p className="text-xs text-gray-300">Satisfaction</p>
          </div>
        </div>
      </div>
    </div>
  );
}