import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "人物系统",
    icon: "character",
    prefix: "/character/",
    children: [{
      text: "装备系统",
      icon: "weapon",
      children: ["equipment.md", "hexagram.md", "set.md", "gemstone.md"],
    }, {
      text: "角色强化",
      icon: "enhancement",
      children: ["fairy.md", "rune.md", "artifact.md"],
    }, {
      text: "技能",
      icon: "enhancement",
      children: ["mount.md", "celestial_matrix.md"],
    }],
  },
  {
    text: "宠物系统",
    icon: "pet",
    prefix: "/pet/",
    children: ["dragon_crucible.md", "mount.md"],
  },
]);
