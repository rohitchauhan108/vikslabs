const fs = require('fs');
let c = fs.readFileSync('src/components/Header.tsx','utf8');
// Replace imports
const oldImport = `import {
  AlertTriangle,
  Phone,
  Mail,
  ChevronDown,
  Menu,
  X,
  ChevronRight,
  Building2,
  Users,
  TrendingUp,
  Search,
  MapPin,
  Megaphone,
  Palette,
  Image as ImageIcon,
  LayoutGrid,
  Code2,
  Globe,
  ShoppingCart,
  ShoppingBag,
  Instagram,
  Video,
  PenTool,
  Newspaper,
  MessageCircle,
} from "lucide-react";`;
const newImport = `import {
  AlertTriangle,
  Phone,
  Mail,
  ChevronDown,
  Menu,
  X,
  ChevronRight,
  Building2,
  Users,
  TrendingUp,
  Search,
  Megaphone,
  Sparkles,
  Zap,
  Code,
  Share2,
  Layout,
  Layers,
  Video,
  Target,
  Newspaper,
  BarChart3,
  ArrowRight,
} from "lucide-react";`;
c = c.replace(oldImport, newImport);
c = c.replace(/<Code2 /g,'<Code ');
c = c.replace(/<Globe /g,'<Layers ');
c = c.replace(/<ShoppingCart /g,'<Target ');
c = c.replace(/<ShoppingBag /g,'<Zap ');
c = c.replace(/<Instagram /g,'<Share2 ');
c = c.replace(/<Camera /g,'<Video ');
c = c.replace(/<Palette /g,'<Sparkles ');
c = c.replace(/<PenTool /g,'<Zap ');
c = c.replace(/<ImageIcon /g,'<Layout ');
c = c.replace(/<LayoutGrid /g,'<Layers ');
c = c.replace(/<MapPin /g,'<BarChart3 ');
c = c.replace(/<MessageCircle /g,'<ArrowRight ');
fs.writeFileSync('src/components/Header.tsx',c);
console.log('OK fixed icons');
