import {
  Building2,
  DoorOpen,
  Hammer,
  House,
  Paintbrush,
  PanelsTopLeft,
  ShieldCheck,
  Wrench,
} from "@lucide/astro";

const serviceIcons = {
  tool: Wrench,
  building: Building2,
  hammer: Hammer,
  bath: PanelsTopLeft,
  kitchen: PanelsTopLeft,
  paintbrush: Paintbrush,
  wall: PanelsTopLeft,
  door: DoorOpen,
  floor: PanelsTopLeft,
  deck: Hammer,
  fence: Hammer,
  gutter: Wrench,
  tile: PanelsTopLeft,
  seal: ShieldCheck,
  furniture: Wrench,
  blinds: PanelsTopLeft,
  shelf: PanelsTopLeft,
  "pressure-washer": Wrench,
  home: House,
  rental: House,
  commercial: Building2,
};

export function getServiceIcon(iconName: string) {
  return serviceIcons[iconName as keyof typeof serviceIcons] ?? Wrench;
}
