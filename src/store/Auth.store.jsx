import { create } from "zustand";
import { supabase } from "../supabase/supabase.config";
export const useAuthStore = create((set) => ({
    isAuth: false,

    signWithMail: async () => {
        try {
            const { data, error } = await supabase.auth.signInWithOAuth({
                provider: "email",
            });
            if (error) throw error("Error signing in with email");
            set({ isAuth: true });
            return data;
        } catch (error) {
            console.log(error);
        }
    },
    signOut: async () => {
        try {
            const { error } = await supabase.auth.signOut();
            if (error) throw error("Error signing out");
            set({ isAuth: false });
        } catch (error) {
            console.log(error);
        }
    },
}));
