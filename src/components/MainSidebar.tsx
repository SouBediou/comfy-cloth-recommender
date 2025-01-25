import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarProvider,
} from "@/components/ui/sidebar";
import {
  LogIn,
  Home,
  MapPin,
  Cloud,
  Target,
  Briefcase,
  UserRound,
  Palmtree,
  GlassWater,
  Music,
  Heart,
} from "lucide-react";

export const MainSidebar = () => {
  const navigate = useNavigate();

  return (
    <SidebarProvider defaultOpen>
      <Sidebar>
        <SidebarHeader>
          <img
            src="/lovable-uploads/23f4a87b-e26b-4b7e-86a8-5fd4585550ca.png"
            alt="Logo"
            className="w-32 mx-auto"
          />
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                onClick={() => navigate("/signin")}
                tooltip="Sign-in"
              >
                <LogIn className="w-4 h-4" />
                <span>Sign-in</span>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton onClick={() => navigate("/")} tooltip="Accueil">
                <Home className="w-4 h-4" />
                <span>Accueil</span>
              </SidebarMenuButton>

              <SidebarMenuSub>
                <SidebarMenuItem>
                  <SidebarMenuSubButton onClick={() => navigate("/location")}>
                    <MapPin className="w-4 h-4" />
                    <span>OÙ SUIS-JE ?</span>
                  </SidebarMenuSubButton>
                </SidebarMenuItem>

                <SidebarMenuItem>
                  <SidebarMenuSubButton onClick={() => navigate("/weather")}>
                    <Cloud className="w-4 h-4" />
                    <span>API Météo intégrée</span>
                  </SidebarMenuSubButton>
                </SidebarMenuItem>
              </SidebarMenuSub>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton onClick={() => navigate("/mood")} tooltip="Mood">
                <Target className="w-4 h-4" />
                <span>🎯 MOOD DU JOUR</span>
              </SidebarMenuButton>

              <SidebarMenuSub>
                <SidebarMenuItem>
                  <SidebarMenuSubButton onClick={() => navigate("/mood/bureau")}>
                    <Briefcase className="w-4 h-4" />
                    <span>Bureau & Meeting</span>
                  </SidebarMenuSubButton>
                </SidebarMenuItem>

                <SidebarMenuItem>
                  <SidebarMenuSubButton onClick={() => navigate("/mood/entretien")}>
                    <UserRound className="w-4 h-4" />
                    <span>Entretien</span>
                  </SidebarMenuSubButton>
                </SidebarMenuItem>

                <SidebarMenuItem>
                  <SidebarMenuSubButton onClick={() => navigate("/mood/relax")}>
                    <Palmtree className="w-4 h-4" />
                    <span>Relax & Week-end</span>
                  </SidebarMenuSubButton>
                </SidebarMenuItem>

                <SidebarMenuItem>
                  <SidebarMenuSubButton onClick={() => navigate("/mood/ceremonie")}>
                    <GlassWater className="w-4 h-4" />
                    <span>Cérémonie & Cocktail</span>
                  </SidebarMenuSubButton>
                </SidebarMenuItem>

                <SidebarMenuItem>
                  <SidebarMenuSubButton onClick={() => navigate("/mood/night")}>
                    <Music className="w-4 h-4" />
                    <span>Night & Party</span>
                  </SidebarMenuSubButton>
                </SidebarMenuItem>

                <SidebarMenuItem>
                  <SidebarMenuSubButton onClick={() => navigate("/mood/crush")}>
                    <Heart className="w-4 h-4" />
                    <span>Crush & Date</span>
                  </SidebarMenuSubButton>
                </SidebarMenuItem>
              </SidebarMenuSub>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>
    </SidebarProvider>
  );
};