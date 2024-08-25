import { create } from "zustand";
import { supabase } from "../supabase/supabase.config";
export const useAuthStore = create((set) => ({
    isAuth: false,

    signInWithGoogle: async () => {
        try {
            const { data, error } = await supabase.auth.signInWithOAuth({
                provider: "google",
            });
            if (error) throw new error("Error signing in with email");
            set({ isAuth: true });
            return data;
        } catch (error) {
            console.log(error);
        }
    },
    signOut: async () => {
        try {
            const { error } = await supabase.auth.signOut();
            set({ isAuth: false });
            if (error) throw error("Error signing out");
        } catch (error) {
            console.log(error);
        }
    },
}));
