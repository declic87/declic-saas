import { create } from "zustand";

// Types
interface User {
  id: string;
  email: string;
  name: string;
  role: "ADMIN" | "HOS" | "CLOSER" | "SETTER" | "EXPERT" | "CLIENT";
  avatar?: string;
}

interface AuthStore {
  user: User | null;
  isLoading: boolean;
  setUser: (user: User | null) => void;
  setLoading: (loading: boolean) => void;
}

interface UIStore {
  sidebarOpen: boolean;
  modalOpen: string | null;
  toggleSidebar: () => void;
  openModal: (modalId: string) => void;
  closeModal: () => void;
}

interface NotificationStore {
  notifications: Array<{
    id: string;
    type: "success" | "error" | "warning" | "info";
    message: string;
  }>;
  addNotification: (
    type: "success" | "error" | "warning" | "info",
    message: string
  ) => void;
  removeNotification: (id: string) => void;
}

// Auth Store
export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  isLoading: true,
  setUser: (user) => set({ user }),
  setLoading: (isLoading) => set({ isLoading }),
}));

// UI Store
export const useUIStore = create<UIStore>((set) => ({
  sidebarOpen: true,
  modalOpen: null,
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
  openModal: (modalId) => set({ modalOpen: modalId }),
  closeModal: () => set({ modalOpen: null }),
}));

// Notification Store
export const useNotificationStore = create<NotificationStore>((set) => ({
  notifications: [],
  addNotification: (type, message) =>
    set((state) => ({
      notifications: [
        ...state.notifications,
        { id: Date.now().toString(), type, message },
      ],
    })),
  removeNotification: (id) =>
    set((state) => ({
      notifications: state.notifications.filter((n) => n.id !== id),
    })),
}));

// Pipeline Store (pour le Kanban)
interface Lead {
  id: string;
  name: string;
  email: string;
  phone?: string;
  temperature: "HOT" | "WARM" | "COLD";
  ca?: number;
  activite?: string;
  stage: number;
}

interface PipelineStore {
  leads: Record<number, Lead[]>;
  isLoading: boolean;
  moveLead: (leadId: string, fromStage: number, toStage: number) => void;
  setLeads: (leads: Record<number, Lead[]>) => void;
  addLead: (lead: Lead) => void;
  updateLead: (leadId: string, updates: Partial<Lead>) => void;
}

export const usePipelineStore = create<PipelineStore>((set) => ({
  leads: {
    0: [],
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
    7: [],
  },
  isLoading: false,
  moveLead: (leadId, fromStage, toStage) =>
    set((state) => {
      const lead = state.leads[fromStage]?.find((l) => l.id === leadId);
      if (!lead) return state;

      return {
        leads: {
          ...state.leads,
          [fromStage]: state.leads[fromStage].filter((l) => l.id !== leadId),
          [toStage]: [...state.leads[toStage], { ...lead, stage: toStage }],
        },
      };
    }),
  setLeads: (leads) => set({ leads }),
  addLead: (lead) =>
    set((state) => ({
      leads: {
        ...state.leads,
        [lead.stage]: [...state.leads[lead.stage], lead],
      },
    })),
  updateLead: (leadId, updates) =>
    set((state) => {
      const newLeads = { ...state.leads };
      for (const stage of Object.keys(newLeads)) {
        const index = newLeads[Number(stage)].findIndex((l) => l.id === leadId);
        if (index !== -1) {
          newLeads[Number(stage)][index] = {
            ...newLeads[Number(stage)][index],
            ...updates,
          };
          break;
        }
      }
      return { leads: newLeads };
    }),
}));
