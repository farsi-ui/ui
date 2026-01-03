import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Slider } from "@/components/ui/slider";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Skeleton } from "@/components/ui/skeleton";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import {
  Search,
  Plus,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Home,
  User,
  Bell,
  X,
  Star,
  Heart,
  Download,
  Info,
  AlertCircle,
  CheckCircle,
  Loader2,
  Settings,
  Mail,
  MoreHorizontal,
  Edit,
  Trash2,
  Copy,
  Share,
  Menu,
  Calendar,
  Inbox,
  FolderOpen,
  Package,
} from "lucide-react";

export interface ComponentExample {
  id: string;
  title: string;
  description?: string;
  preview: ReactNode;
  code: string;
}

export interface ComponentData {
  slug: string;
  name: string;
  nameEn: string;
  description: string;
  category: "inputs" | "display" | "feedback" | "navigation" | "layout" | "overlay";
  examples: ComponentExample[];
  isNew?: boolean;
}

export const componentCategories = {
  inputs: "ورودی‌ها",
  display: "نمایشی",
  feedback: "بازخورد",
  navigation: "ناوبری",
  layout: "چیدمان",
  overlay: "روکش",
};

// Helper function to get component by slug
export function getComponentBySlug(slug: string): ComponentData | undefined {
  return allComponents.find((c) => c.slug === slug);
}

// Helper function to get components by category
export function getComponentsByCategory(category: string): ComponentData[] {
  return allComponents.filter((c) => c.category === category);
}

export const allComponents: ComponentData[] = [
  // ===== INPUTS =====
  {
    slug: "button",
    name: "دکمه",
    nameEn: "Button",
    description: "دکمه‌های تعاملی برای انجام عملیات مختلف",
    category: "inputs",
    examples: [
      {
        id: "default",
        title: "پیش‌فرض",
        description: "دکمه استاندارد با استایل اصلی",
        preview: (
          <div className="flex flex-wrap gap-3">
            <Button>عنوان دکمه</Button>
            <Button variant="secondary">ثانویه</Button>
            <Button variant="outline">خط‌دار</Button>
          </div>
        ),
        code: `<Button>عنوان دکمه</Button>
<Button variant="secondary">ثانویه</Button>
<Button variant="outline">خط‌دار</Button>`,
      },
      {
        id: "variants",
        title: "انواع دکمه",
        description: "تمام حالت‌های موجود برای دکمه",
        preview: (
          <div className="flex flex-wrap gap-3">
            <Button variant="default">اصلی</Button>
            <Button variant="secondary">ثانویه</Button>
            <Button variant="outline">خط‌دار</Button>
            <Button variant="ghost">شبح</Button>
            <Button variant="destructive">خطرناک</Button>
            <Button variant="link">لینک</Button>
          </div>
        ),
        code: `<Button variant="default">اصلی</Button>
<Button variant="secondary">ثانویه</Button>
<Button variant="outline">خط‌دار</Button>
<Button variant="ghost">شبح</Button>
<Button variant="destructive">خطرناک</Button>
<Button variant="link">لینک</Button>`,
      },
      {
        id: "sizes",
        title: "اندازه‌ها",
        description: "دکمه‌ها در اندازه‌های مختلف",
        preview: (
          <div className="flex flex-wrap items-center gap-3">
            <Button size="sm">کوچک</Button>
            <Button size="default">معمولی</Button>
            <Button size="lg">بزرگ</Button>
          </div>
        ),
        code: `<Button size="sm">کوچک</Button>
<Button size="default">معمولی</Button>
<Button size="lg">بزرگ</Button>`,
      },
      {
        id: "with-icon",
        title: "با آیکون",
        description: "دکمه‌ها همراه با آیکون - توجه به استفاده از ms-2 برای RTL",
        preview: (
          <div className="flex flex-wrap gap-3">
            <Button>
              <Plus className="h-4 w-4 me-2" />
              افزودن
            </Button>
            <Button variant="outline">
              <Download className="h-4 w-4 me-2" />
              دانلود
            </Button>
            <Button variant="secondary">
              ارسال
              <ChevronLeft className="h-4 w-4 ms-2" />
            </Button>
          </div>
        ),
        code: `{/* استفاده از me-2 برای فاصله آیکون از متن در RTL */}
<Button>
  <Plus className="h-4 w-4 me-2" />
  افزودن
</Button>
<Button variant="outline">
  <Download className="h-4 w-4 me-2" />
  دانلود
</Button>
{/* استفاده از ms-2 برای آیکون بعد از متن */}
<Button variant="secondary">
  ارسال
  <ChevronLeft className="h-4 w-4 ms-2" />
</Button>`,
      },
      {
        id: "loading",
        title: "در حال بارگذاری",
        description: "وضعیت بارگذاری دکمه",
        preview: (
          <div className="flex flex-wrap gap-3">
            <Button disabled>
              <Loader2 className="h-4 w-4 me-2 animate-spin" />
              در حال ارسال...
            </Button>
            <Button variant="outline" disabled>
              <Loader2 className="h-4 w-4 me-2 animate-spin" />
              لطفا صبر کنید
            </Button>
          </div>
        ),
        code: `<Button disabled>
  <Loader2 className="h-4 w-4 me-2 animate-spin" />
  در حال ارسال...
</Button>`,
      },
      {
        id: "icon-only",
        title: "فقط آیکون",
        description: "دکمه‌های آیکونی",
        preview: (
          <div className="flex flex-wrap gap-3">
            <Button variant="ghost" size="icon">
              <Heart className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Settings className="h-4 w-4" />
            </Button>
            <Button variant="secondary" size="icon">
              <Bell className="h-4 w-4" />
            </Button>
          </div>
        ),
        code: `<Button variant="ghost" size="icon">
  <Heart className="h-4 w-4" />
</Button>
<Button variant="outline" size="icon">
  <Settings className="h-4 w-4" />
</Button>`,
      },
    ],
  },
  {
    slug: "input",
    name: "ورودی متن",
    nameEn: "Text Input",
    description: "فیلدهای ورودی متن برای دریافت اطلاعات از کاربر",
    category: "inputs",
    examples: [
      {
        id: "default",
        title: "پیش‌فرض",
        description: "ورودی متن ساده با برچسب",
        preview: (
          <div className="w-full max-w-sm space-y-2">
            <Label htmlFor="name">عنوان</Label>
            <Input id="name" placeholder="متن راهنما" />
          </div>
        ),
        code: `<div className="space-y-2">
  <Label htmlFor="name">عنوان</Label>
  <Input id="name" placeholder="متن راهنما" />
</div>`,
      },
      {
        id: "with-icon",
        title: "با آیکون",
        description: "ورودی متن همراه با آیکون - استفاده از start/end برای RTL",
        preview: (
          <div className="w-full max-w-sm space-y-4">
            <div className="relative">
              <Search className="absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="جستجو..." className="ps-10" />
            </div>
            <div className="relative">
              <Mail className="absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input type="email" placeholder="ایمیل خود را وارد کنید" className="ps-10" />
            </div>
          </div>
        ),
        code: `{/* استفاده از start-3 و ps-10 برای RTL */}
<div className="relative">
  <Search className="absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
  <Input placeholder="جستجو..." className="ps-10" />
</div>`,
      },
      {
        id: "states",
        title: "حالت‌های مختلف",
        description: "ورودی در حالت‌های عادی، غیرفعال و خطا",
        preview: (
          <div className="flex w-full max-w-sm flex-col gap-4">
            <div className="space-y-2">
              <Label>عادی</Label>
              <Input placeholder="متن را وارد کنید" />
            </div>
            <div className="space-y-2">
              <Label className="text-muted-foreground">غیرفعال</Label>
              <Input placeholder="غیرفعال" disabled />
            </div>
            <div className="space-y-2">
              <Label className="text-destructive">خطا</Label>
              <Input
                placeholder="فیلد اجباری"
                className="border-destructive focus-visible:ring-destructive"
              />
              <p className="text-xs text-destructive">این فیلد اجباری است</p>
            </div>
          </div>
        ),
        code: `{/* حالت عادی */}
<Input placeholder="متن را وارد کنید" />

{/* حالت غیرفعال */}
<Input placeholder="غیرفعال" disabled />

{/* حالت خطا */}
<Input placeholder="فیلد اجباری"
  className="border-destructive focus-visible:ring-destructive" />
<p className="text-xs text-destructive">این فیلد اجباری است</p>`,
      },
    ],
  },
  {
    slug: "textarea",
    name: "متن چندخطی",
    nameEn: "Text Area",
    description: "فیلد ورودی برای متن‌های طولانی و چندخطی",
    category: "inputs",
    examples: [
      {
        id: "default",
        title: "پیش‌فرض",
        description: "متن چندخطی ساده",
        preview: (
          <div className="w-full space-y-2">
            <Label htmlFor="message">عنوان</Label>
            <Textarea id="message" placeholder="پیام خود را بنویسید..." />
          </div>
        ),
        code: `<Label htmlFor="message">عنوان</Label>
<Textarea id="message" placeholder="پیام خود را بنویسید..." />`,
      },
      {
        id: "with-counter",
        title: "با شمارنده",
        description: "متن چندخطی با نمایش تعداد کاراکتر",
        preview: (
          <div className="w-full max-w-sm space-y-2">
            <Label>توضیحات</Label>
            <Textarea placeholder="حداکثر ۲۵۰ کاراکتر..." maxLength={250} rows={4} />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>اختیاری</span>
              <span>۰/۲۵۰</span>
            </div>
          </div>
        ),
        code: `<Label>توضیحات</Label>
<Textarea placeholder="حداکثر ۲۵۰ کاراکتر..." maxLength={250} rows={4} />
<div className="flex justify-between text-xs text-muted-foreground">
  <span>اختیاری</span>
  <span>۰/۲۵۰</span>
</div>`,
      },
      {
        id: "disabled",
        title: "غیرفعال",
        description: "متن چندخطی در حالت غیرفعال",
        preview: (
          <div className="w-full max-w-sm space-y-2">
            <Label className="text-muted-foreground">یادداشت</Label>
            <Textarea placeholder="این فیلد غیرفعال است..." disabled rows={3} />
          </div>
        ),
        code: `<Label className="text-muted-foreground">یادداشت</Label>
<Textarea placeholder="این فیلد غیرفعال است..." disabled rows={3} />`,
      },
    ],
  },
  {
    slug: "checkbox",
    name: "چک‌باکس",
    nameEn: "Checkbox",
    description: "کنترل انتخاب چندگانه برای فرم‌ها",
    category: "inputs",
    examples: [
      {
        id: "default",
        title: "پیش‌فرض",
        description: "چک‌باکس ساده با برچسب",
        preview: (
          <div className="flex items-center gap-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms">عنوان</Label>
          </div>
        ),
        code: `<div className="flex items-center gap-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">عنوان</Label>
</div>`,
      },
      {
        id: "group",
        title: "گروه چک‌باکس",
        description: "چندین چک‌باکس برای انتخاب‌های متعدد",
        preview: (
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Checkbox id="opt1" defaultChecked />
              <Label htmlFor="opt1">گزینه اول</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="opt2" />
              <Label htmlFor="opt2">گزینه دوم</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="opt3" disabled />
              <Label htmlFor="opt3" className="text-muted-foreground">
                گزینه غیرفعال
              </Label>
            </div>
          </div>
        ),
        code: `<div className="flex items-center gap-2">
  <Checkbox id="opt1" defaultChecked />
  <Label htmlFor="opt1">گزینه اول</Label>
</div>
<div className="flex items-center gap-2">
  <Checkbox id="opt2" />
  <Label htmlFor="opt2">گزینه دوم</Label>
</div>
<div className="flex items-center gap-2">
  <Checkbox id="opt3" disabled />
  <Label htmlFor="opt3" className="text-muted-foreground">غیرفعال</Label>
</div>`,
      },
      {
        id: "with-description",
        title: "با توضیحات",
        description: "چک‌باکس همراه با متن توضیحی",
        preview: (
          <div className="flex flex-col gap-4 max-w-sm">
            <div className="flex items-start gap-3 rounded-lg border p-4">
              <Checkbox id="terms-desc" className="mt-1" />
              <div className="space-y-1">
                <Label htmlFor="terms-desc">شرایط و قوانین</Label>
                <p className="text-xs text-muted-foreground">
                  با علامت‌گذاری این گزینه، شرایط استفاده از خدمات را می‌پذیرم
                </p>
              </div>
            </div>
          </div>
        ),
        code: `<div className="flex items-start gap-3 rounded-lg border p-4">
  <Checkbox id="terms-desc" className="mt-1" />
  <div className="space-y-1">
    <Label htmlFor="terms-desc">شرایط و قوانین</Label>
    <p className="text-xs text-muted-foreground">
      با علامت‌گذاری این گزینه، شرایط استفاده از خدمات را می‌پذیرم
    </p>
  </div>
</div>`,
      },
    ],
  },
  {
    slug: "radio-button",
    name: "دکمه رادیویی",
    nameEn: "Radio Button",
    description: "کنترل انتخاب تکی از میان گزینه‌ها",
    category: "inputs",
    examples: [
      {
        id: "default",
        title: "پیش‌فرض",
        description: "گروه دکمه‌های رادیویی",
        preview: (
          <RadioGroup defaultValue="option-1" className="gap-3">
            <div className="flex items-center gap-2">
              <RadioGroupItem value="option-1" id="r1" />
              <Label htmlFor="r1">عنوان</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="option-2" id="r2" />
              <Label htmlFor="r2">عنوان</Label>
            </div>
          </RadioGroup>
        ),
        code: `<RadioGroup defaultValue="option-1">
  <div className="flex items-center gap-2">
    <RadioGroupItem value="option-1" id="r1" />
    <Label htmlFor="r1">عنوان</Label>
  </div>
  <div className="flex items-center gap-2">
    <RadioGroupItem value="option-2" id="r2" />
    <Label htmlFor="r2">عنوان</Label>
  </div>
</RadioGroup>`,
      },
      {
        id: "horizontal",
        title: "افقی",
        description: "دکمه‌های رادیویی در یک ردیف",
        preview: (
          <RadioGroup defaultValue="opt-a" className="flex gap-6">
            <div className="flex items-center gap-2">
              <RadioGroupItem value="opt-a" id="ra" />
              <Label htmlFor="ra">گزینه الف</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="opt-b" id="rb" />
              <Label htmlFor="rb">گزینه ب</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="opt-c" id="rc" />
              <Label htmlFor="rc">گزینه ج</Label>
            </div>
          </RadioGroup>
        ),
        code: `<RadioGroup defaultValue="opt-a" className="flex gap-6">
  <div className="flex items-center gap-2">
    <RadioGroupItem value="opt-a" id="ra" />
    <Label htmlFor="ra">گزینه الف</Label>
  </div>
  <div className="flex items-center gap-2">
    <RadioGroupItem value="opt-b" id="rb" />
    <Label htmlFor="rb">گزینه ب</Label>
  </div>
</RadioGroup>`,
      },
      {
        id: "with-description",
        title: "با توضیحات",
        description: "دکمه‌های رادیویی همراه با متن توضیحی",
        preview: (
          <RadioGroup defaultValue="plan-basic" className="gap-4 max-w-sm">
            <div className="flex items-start gap-3 rounded-lg border p-4">
              <RadioGroupItem value="plan-basic" id="plan-basic" className="mt-1" />
              <div className="space-y-1">
                <Label htmlFor="plan-basic" className="font-medium">
                  پایه
                </Label>
                <p className="text-xs text-muted-foreground">مناسب برای استفاده شخصی</p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg border p-4">
              <RadioGroupItem value="plan-pro" id="plan-pro" className="mt-1" />
              <div className="space-y-1">
                <Label htmlFor="plan-pro" className="font-medium">
                  حرفه‌ای
                </Label>
                <p className="text-xs text-muted-foreground">مناسب برای تیم‌های کوچک</p>
              </div>
            </div>
          </RadioGroup>
        ),
        code: `<RadioGroup defaultValue="plan-basic" className="gap-4">
  <div className="flex items-start gap-3 rounded-lg border p-4">
    <RadioGroupItem value="plan-basic" id="plan-basic" className="mt-1" />
    <div className="space-y-1">
      <Label htmlFor="plan-basic" className="font-medium">پایه</Label>
      <p className="text-xs text-muted-foreground">مناسب برای استفاده شخصی</p>
    </div>
  </div>
  <div className="flex items-start gap-3 rounded-lg border p-4">
    <RadioGroupItem value="plan-pro" id="plan-pro" className="mt-1" />
    <div className="space-y-1">
      <Label htmlFor="plan-pro" className="font-medium">حرفه‌ای</Label>
      <p className="text-xs text-muted-foreground">مناسب برای تیم‌های کوچک</p>
    </div>
  </div>
</RadioGroup>`,
      },
    ],
  },
  {
    slug: "switch",
    name: "کلید",
    nameEn: "Switch Button",
    description: "کلید روشن/خاموش برای تنظیمات",
    category: "inputs",
    examples: [
      {
        id: "default",
        title: "پیش‌فرض",
        description: "کلید ساده با برچسب",
        preview: (
          <div className="flex items-center gap-3">
            <Switch id="airplane" />
            <Label htmlFor="airplane">عنوان</Label>
          </div>
        ),
        code: `<div className="flex items-center gap-3">
  <Switch id="airplane" />
  <Label htmlFor="airplane">عنوان</Label>
</div>`,
      },
      {
        id: "with-description",
        title: "با توضیحات",
        description: "کلید همراه با متن توضیحی",
        preview: (
          <div className="flex items-start justify-between gap-4 rounded-lg border p-4 max-w-sm">
            <div className="space-y-1">
              <Label htmlFor="notif">عنوان</Label>
              <p className="text-sm text-muted-foreground">متن توضیحات</p>
            </div>
            <Switch id="notif" />
          </div>
        ),
        code: `<div className="flex items-start justify-between gap-4 rounded-lg border p-4">
  <div className="space-y-1">
    <Label htmlFor="notif">عنوان</Label>
    <p className="text-sm text-muted-foreground">متن توضیحات</p>
  </div>
  <Switch id="notif" />
</div>`,
      },
      {
        id: "group",
        title: "گروه تنظیمات",
        description: "چندین کلید در یک کارت تنظیمات",
        preview: (
          <Card className="w-full max-w-sm">
            <CardHeader>
              <CardTitle className="text-base">اعلان‌ها</CardTitle>
              <CardDescription>تنظیمات اعلان‌های خود را مدیریت کنید</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="email-notif">اعلان ایمیل</Label>
                <Switch id="email-notif" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="push-notif">اعلان پوش</Label>
                <Switch id="push-notif" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="sms-notif" className="text-muted-foreground">
                  پیامک
                </Label>
                <Switch id="sms-notif" disabled />
              </div>
            </CardContent>
          </Card>
        ),
        code: `<Card>
  <CardHeader>
    <CardTitle className="text-base">اعلان‌ها</CardTitle>
    <CardDescription>تنظیمات اعلان‌های خود را مدیریت کنید</CardDescription>
  </CardHeader>
  <CardContent className="space-y-4">
    <div className="flex items-center justify-between">
      <Label htmlFor="email-notif">اعلان ایمیل</Label>
      <Switch id="email-notif" defaultChecked />
    </div>
    <div className="flex items-center justify-between">
      <Label htmlFor="push-notif">اعلان پوش</Label>
      <Switch id="push-notif" />
    </div>
    <div className="flex items-center justify-between">
      <Label htmlFor="sms-notif" className="text-muted-foreground">پیامک</Label>
      <Switch id="sms-notif" disabled />
    </div>
  </CardContent>
</Card>`,
      },
    ],
  },
  {
    slug: "select",
    name: "انتخاب",
    nameEn: "Select",
    description: "منوی کشویی برای انتخاب یک گزینه",
    category: "inputs",
    examples: [
      {
        id: "default",
        title: "پیش‌فرض",
        description: "انتخاب ساده",
        preview: (
          <Select>
            <SelectTrigger className="w-50">
              <SelectValue placeholder="انتخاب کنید" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="opt1">گزینه اول</SelectItem>
              <SelectItem value="opt2">گزینه دوم</SelectItem>
              <SelectItem value="opt3">گزینه سوم</SelectItem>
            </SelectContent>
          </Select>
        ),
        code: `<Select>
  <SelectTrigger className="w-50">
    <SelectValue placeholder="انتخاب کنید" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="opt1">گزینه اول</SelectItem>
    <SelectItem value="opt2">گزینه دوم</SelectItem>
    <SelectItem value="opt3">گزینه سوم</SelectItem>
  </SelectContent>
</Select>`,
      },
      {
        id: "with-label",
        title: "با برچسب",
        description: "انتخاب همراه با برچسب فرم",
        preview: (
          <div className="w-50 space-y-2">
            <Label>شهر</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="شهر خود را انتخاب کنید" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="tehran">تهران</SelectItem>
                <SelectItem value="mashhad">مشهد</SelectItem>
                <SelectItem value="isfahan">اصفهان</SelectItem>
                <SelectItem value="shiraz">شیراز</SelectItem>
              </SelectContent>
            </Select>
          </div>
        ),
        code: `<div className="space-y-2">
  <Label>شهر</Label>
  <Select>
    <SelectTrigger>
      <SelectValue placeholder="شهر خود را انتخاب کنید" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="tehran">تهران</SelectItem>
      <SelectItem value="mashhad">مشهد</SelectItem>
      <SelectItem value="isfahan">اصفهان</SelectItem>
    </SelectContent>
  </Select>
</div>`,
      },
      {
        id: "disabled",
        title: "غیرفعال",
        description: "انتخاب در حالت غیرفعال",
        preview: (
          <div className="w-50 space-y-2">
            <Label className="text-muted-foreground">دسته‌بندی</Label>
            <Select disabled>
              <SelectTrigger>
                <SelectValue placeholder="انتخاب غیرفعال" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="opt1">گزینه اول</SelectItem>
                <SelectItem value="opt2">گزینه دوم</SelectItem>
              </SelectContent>
            </Select>
          </div>
        ),
        code: `<Label className="text-muted-foreground">دسته‌بندی</Label>
<Select disabled>
  <SelectTrigger>
    <SelectValue placeholder="انتخاب غیرفعال" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="opt1">گزینه اول</SelectItem>
    <SelectItem value="opt2">گزینه دوم</SelectItem>
  </SelectContent>
</Select>`,
      },
    ],
  },
  {
    slug: "range-input",
    name: "ورودی بازه",
    nameEn: "Range Input",
    description: "کنترل لغزنده برای انتخاب مقدار عددی",
    category: "inputs",
    examples: [
      {
        id: "default",
        title: "پیش‌فرض",
        description: "اسلایدر ساده با برچسب",
        preview: (
          <div className="w-full max-w-sm space-y-4">
            <div className="space-y-1">
              <Label>عنوان</Label>
              <p className="text-xs text-muted-foreground">متن توضیحات</p>
            </div>
            <Slider defaultValue={[50]} max={100} step={1} />
          </div>
        ),
        code: `<Label>عنوان</Label>
<p className="text-xs text-muted-foreground">متن توضیحات</p>
<Slider defaultValue={[50]} max={100} step={1} />`,
      },
      {
        id: "range",
        title: "بازه دوتایی",
        description: "انتخاب بازه با دو نقطه",
        preview: (
          <div className="w-full max-w-sm space-y-4">
            <div className="flex items-center justify-between">
              <Label>بازه قیمت</Label>
              <span className="text-sm text-muted-foreground">۲۵ - ۷۵</span>
            </div>
            <Slider defaultValue={[25, 75]} max={100} step={1} />
          </div>
        ),
        code: `<div className="flex items-center justify-between">
  <Label>بازه قیمت</Label>
  <span className="text-sm text-muted-foreground">۲۵ - ۷۵</span>
</div>
<Slider defaultValue={[25, 75]} max={100} step={1} />`,
      },
      {
        id: "with-steps",
        title: "با مقادیر مشخص",
        description: "اسلایدر با گام‌های بزرگ‌تر",
        preview: (
          <div className="w-full max-w-sm space-y-4">
            <div className="space-y-1">
              <Label>میزان صدا</Label>
            </div>
            <Slider defaultValue={[50]} max={100} step={25} />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>۰</span>
              <span>۲۵</span>
              <span>۵۰</span>
              <span>۷۵</span>
              <span>۱۰۰</span>
            </div>
          </div>
        ),
        code: `<Label>میزان صدا</Label>
<Slider defaultValue={[50]} max={100} step={25} />
<div className="flex justify-between text-xs text-muted-foreground">
  <span>۰</span>
  <span>۲۵</span>
  <span>۵۰</span>
  <span>۷۵</span>
  <span>۱۰۰</span>
</div>`,
      },
    ],
  },
  {
    slug: "search",
    name: "جستجو",
    nameEn: "Search",
    description: "فیلد جستجو با قابلیت میانبر",
    category: "inputs",
    examples: [
      {
        id: "default",
        title: "پیش‌فرض",
        description: "جستجو با آیکون و میانبر - استفاده از logical properties",
        preview: (
          <div className="relative w-full max-w-sm">
            <Search className="absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="جستجو" className="ps-10 pe-16" />
            <kbd className="pointer-events-none absolute end-3 top-1/2 -translate-y-1/2 select-none rounded border bg-muted px-1.5 py-0.5 font-mono text-xs text-muted-foreground">
              ⌘K
            </kbd>
          </div>
        ),
        code: `{/* استفاده از start/end و ps/pe برای RTL */}
<div className="relative">
  <Search className="absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2" />
  <Input placeholder="جستجو" className="ps-10 pe-16" />
  <kbd className="absolute end-3 top-1/2 -translate-y-1/2 ...">⌘K</kbd>
</div>`,
      },
      {
        id: "simple",
        title: "ساده",
        description: "جستجو بدون میانبر",
        preview: (
          <div className="relative w-full max-w-sm">
            <Search className="absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="جستجو..." className="ps-10" />
          </div>
        ),
        code: `<div className="relative">
  <Search className="absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2" />
  <Input placeholder="جستجو..." className="ps-10" />
</div>`,
      },
      {
        id: "with-button",
        title: "با دکمه",
        description: "فیلد جستجو همراه با دکمه ارسال",
        preview: (
          <div className="flex w-full max-w-sm gap-2">
            <div className="relative flex-1">
              <Search className="absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="جستجو..." className="ps-10" />
            </div>
            <Button>جستجو</Button>
          </div>
        ),
        code: `<div className="flex gap-2">
  <div className="relative flex-1">
    <Search className="absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2" />
    <Input placeholder="جستجو..." className="ps-10" />
  </div>
  <Button>جستجو</Button>
</div>`,
      },
    ],
  },
  {
    slug: "multi-select",
    name: "انتخاب چندگانه",
    nameEn: "Multi Select Area",
    description: "انتخاب چند گزینه به صورت همزمان",
    category: "inputs",
    examples: [
      {
        id: "default",
        title: "پیش‌فرض",
        description: "انتخاب چندگانه با نمایش تگ",
        preview: (
          <div className="w-full max-w-sm space-y-2">
            <Label>کشورها</Label>
            <div className="flex flex-wrap gap-2 rounded-md border p-3">
              <Badge variant="secondary" className="gap-1">
                ایران
                <button className="rounded-full hover:bg-foreground/10">
                  <X className="h-3 w-3" />
                </button>
              </Badge>
              <Badge variant="secondary" className="gap-1">
                ترکیه
                <button className="rounded-full hover:bg-foreground/10">
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            </div>
          </div>
        ),
        code: `<Label>کشورها</Label>
<div className="flex flex-wrap gap-2 rounded-md border p-3">
  <Badge variant="secondary" className="gap-1">
    ایران
    <button><X className="h-3 w-3" /></button>
  </Badge>
  <Badge variant="secondary" className="gap-1">
    ترکیه
    <button><X className="h-3 w-3" /></button>
  </Badge>
</div>`,
      },
      {
        id: "with-search",
        title: "با جستجو",
        description: "انتخاب چندگانه با قابلیت جستجو",
        preview: (
          <div className="w-full max-w-sm space-y-2">
            <Label>انتخاب تگ</Label>
            <div className="rounded-md border">
              <div className="flex flex-wrap gap-2 p-2">
                <Badge variant="secondary" className="gap-1">
                  طراحی
                  <X className="h-3 w-3" />
                </Badge>
              </div>
              <div className="border-t">
                <Input placeholder="جستجو..." className="border-0 focus-visible:ring-0" />
              </div>
            </div>
          </div>
        ),
        code: `<div className="rounded-md border">
  <div className="flex flex-wrap gap-2 p-2">
    <Badge variant="secondary" className="gap-1">
      طراحی
      <X className="h-3 w-3" />
    </Badge>
  </div>
  <div className="border-t">
    <Input placeholder="جستجو..." className="border-0" />
  </div>
</div>`,
      },
      {
        id: "dropdown",
        title: "کشویی",
        description: "انتخاب چندگانه با منوی کشویی",
        preview: (
          <div className="w-full max-w-sm">
            <Label className="mb-2 block">مهارت‌ها</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-full justify-between">
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="secondary" className="text-xs">
                      React
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      TypeScript
                    </Badge>
                  </div>
                  <ChevronDown className="h-4 w-4 shrink-0" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-full p-2">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Checkbox id="skill-react" defaultChecked />
                    <Label htmlFor="skill-react">React</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox id="skill-ts" defaultChecked />
                    <Label htmlFor="skill-ts">TypeScript</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox id="skill-node" />
                    <Label htmlFor="skill-node">Node.js</Label>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        ),
        code: `<Label className="mb-2 block">مهارت‌ها</Label>
<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline" className="w-full justify-between">
      <div className="flex flex-wrap gap-1">
        <Badge variant="secondary" className="text-xs">React</Badge>
        <Badge variant="secondary" className="text-xs">TypeScript</Badge>
      </div>
      <ChevronDown className="h-4 w-4 shrink-0" />
    </Button>
  </PopoverTrigger>
  <PopoverContent className="w-full p-2">
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <Checkbox id="skill-react" defaultChecked />
        <Label htmlFor="skill-react">React</Label>
      </div>
      ...
    </div>
  </PopoverContent>
</Popover>`,
      },
    ],
  },
  // ===== DISPLAY =====
  {
    slug: "avatar",
    name: "آواتار",
    nameEn: "Avatar",
    description: "نمایش تصویر پروفایل یا حروف اول نام",
    category: "display",
    examples: [
      {
        id: "default",
        title: "پیش‌فرض",
        description: "آواتار با تصویر و متن جایگزین",
        preview: (
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarImage src="/diverse-group.png" />
              <AvatarFallback>م</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback className="bg-primary text-primary-foreground">ع</AvatarFallback>
            </Avatar>
          </div>
        ),
        code: `<Avatar>
  <AvatarImage src="/avatar.jpg" />
  <AvatarFallback>م</AvatarFallback>
</Avatar>
<Avatar>
  <AvatarFallback className="bg-primary text-primary-foreground">ع</AvatarFallback>
</Avatar>`,
      },
      {
        id: "sizes",
        title: "اندازه‌ها",
        description: "آواتار در اندازه‌های مختلف",
        preview: (
          <div className="flex items-center gap-4">
            <Avatar className="h-8 w-8">
              <AvatarFallback className="text-xs">ک</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>م</AvatarFallback>
            </Avatar>
            <Avatar className="h-14 w-14">
              <AvatarFallback className="text-lg">ب</AvatarFallback>
            </Avatar>
          </div>
        ),
        code: `<Avatar className="h-8 w-8">
  <AvatarFallback className="text-xs">ک</AvatarFallback>
</Avatar>
<Avatar>
  <AvatarFallback>م</AvatarFallback>
</Avatar>
<Avatar className="h-14 w-14">
  <AvatarFallback className="text-lg">ب</AvatarFallback>
</Avatar>`,
      },
      {
        id: "with-status",
        title: "با وضعیت",
        description: "آواتار همراه با نشانگر آنلاین - استفاده از start برای RTL",
        preview: (
          <div className="flex gap-4">
            <div className="relative inline-block">
              <Avatar>
                <AvatarFallback>آ</AvatarFallback>
              </Avatar>
              <span className="absolute bottom-0 start-0 h-3 w-3 rounded-full border-2 border-background bg-green-500" />
            </div>
            <div className="relative inline-block">
              <Avatar>
                <AvatarFallback>ب</AvatarFallback>
              </Avatar>
              <span className="absolute bottom-0 start-0 h-3 w-3 rounded-full border-2 border-background bg-muted-foreground" />
            </div>
          </div>
        ),
        code: `{/* استفاده از start-0 به جای left-0 برای RTL */}
<div className="relative inline-block">
  <Avatar>
    <AvatarFallback>آ</AvatarFallback>
  </Avatar>
  <span className="absolute bottom-0 start-0 h-3 w-3 rounded-full border-2 border-background bg-green-500" />
</div>`,
      },
    ],
  },
  {
    slug: "badge",
    name: "نشان",
    nameEn: "Tag",
    description: "برچسب‌های کوچک برای نمایش وضعیت یا دسته‌بندی",
    category: "display",
    examples: [
      {
        id: "default",
        title: "پیش‌فرض",
        description: "نشان‌ها در انواع مختلف",
        preview: (
          <div className="flex flex-wrap gap-2">
            <Badge>عنوان</Badge>
            <Badge variant="secondary">ثانویه</Badge>
            <Badge variant="outline">خط‌دار</Badge>
            <Badge variant="destructive">خطرناک</Badge>
          </div>
        ),
        code: `<Badge>عنوان</Badge>
<Badge variant="secondary">ثانویه</Badge>
<Badge variant="outline">خط‌دار</Badge>
<Badge variant="destructive">خطرناک</Badge>`,
      },
      {
        id: "with-icon",
        title: "با آیکون",
        description: "نشان همراه با آیکون و دکمه حذف",
        preview: (
          <div className="flex flex-wrap gap-2">
            <Badge className="gap-1">
              <Star className="h-3 w-3" />
              عنوان
            </Badge>
            <Badge variant="secondary" className="gap-1">
              عنوان
              <button className="rounded-full p-0.5 hover:bg-secondary-foreground/20">
                <X className="h-3 w-3" />
              </button>
            </Badge>
          </div>
        ),
        code: `<Badge className="gap-1">
  <Star className="h-3 w-3" />
  عنوان
</Badge>
<Badge variant="secondary" className="gap-1">
  عنوان
  <button><X className="h-3 w-3" /></button>
</Badge>`,
      },
      {
        id: "status",
        title: "وضعیت",
        description: "نشان‌ها برای نمایش وضعیت‌های مختلف",
        preview: (
          <div className="flex flex-wrap gap-2">
            <Badge className="gap-1 bg-green-500 hover:bg-green-600">
              <CheckCircle className="h-3 w-3" />
              تایید شده
            </Badge>
            <Badge className="gap-1 bg-amber-500 hover:bg-amber-600">
              <Loader2 className="h-3 w-3 animate-spin" />
              در حال بررسی
            </Badge>
            <Badge variant="destructive" className="gap-1">
              <AlertCircle className="h-3 w-3" />
              رد شده
            </Badge>
          </div>
        ),
        code: `<Badge className="gap-1 bg-green-500 hover:bg-green-600">
  <CheckCircle className="h-3 w-3" />
  تایید شده
</Badge>
<Badge className="gap-1 bg-amber-500 hover:bg-amber-600">
  <Loader2 className="h-3 w-3 animate-spin" />
  در حال بررسی
</Badge>
<Badge variant="destructive" className="gap-1">
  <AlertCircle className="h-3 w-3" />
  رد شده
</Badge>`,
      },
    ],
  },
  {
    slug: "chips",
    name: "چیپس",
    nameEn: "Chips",
    description: "برچسب‌های انتخابی و قابل حذف",
    category: "display",
    examples: [
      {
        id: "default",
        title: "پیش‌فرض",
        description: "چیپس با آیکون",
        preview: (
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="gap-1.5 rounded-full px-3 py-1">
              <Star className="h-3.5 w-3.5" />
              عنوان
            </Badge>
            <Badge variant="secondary" className="gap-1.5 rounded-full px-3 py-1">
              <Heart className="h-3.5 w-3.5" />
              عنوان
            </Badge>
          </div>
        ),
        code: `<Badge variant="outline" className="gap-1.5 rounded-full px-3 py-1">
  <Star className="h-3.5 w-3.5" />
  عنوان
</Badge>`,
      },
      {
        id: "removable",
        title: "قابل حذف",
        description: "چیپس با دکمه حذف",
        preview: (
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="gap-1.5 rounded-full py-1 pe-1 ps-3">
              عنوان
              <button className="rounded-full p-1 hover:bg-foreground/10">
                <X className="h-3 w-3" />
              </button>
            </Badge>
            <Badge variant="outline" className="gap-1.5 rounded-full py-1 pe-1 ps-3">
              برچسب
              <button className="rounded-full p-1 hover:bg-foreground/10">
                <X className="h-3 w-3" />
              </button>
            </Badge>
          </div>
        ),
        code: `{/* استفاده از pe و ps برای RTL */}
<Badge variant="secondary" className="gap-1.5 rounded-full py-1 pe-1 ps-3">
  عنوان
  <button className="rounded-full p-1 hover:bg-foreground/10">
    <X className="h-3 w-3" />
  </button>
</Badge>`,
      },
      {
        id: "selectable",
        title: "انتخابی",
        description: "چیپس‌های قابل انتخاب",
        preview: (
          <div className="flex flex-wrap gap-2">
            <Badge variant="default" className="cursor-pointer gap-1.5 rounded-full px-3 py-1">
              <CheckCircle className="h-3.5 w-3.5" />
              انتخاب شده
            </Badge>
            <Badge
              variant="outline"
              className="cursor-pointer gap-1.5 rounded-full px-3 py-1 hover:bg-accent"
            >
              توسعه
            </Badge>
            <Badge
              variant="outline"
              className="cursor-pointer gap-1.5 rounded-full px-3 py-1 hover:bg-accent"
            >
              طراحی
            </Badge>
          </div>
        ),
        code: `<Badge variant="default" className="cursor-pointer gap-1.5 rounded-full px-3 py-1">
  <CheckCircle className="h-3.5 w-3.5" />
  انتخاب شده
</Badge>
<Badge variant="outline" className="cursor-pointer gap-1.5 rounded-full px-3 py-1 hover:bg-accent">
  توسعه
</Badge>`,
      },
    ],
  },
  {
    slug: "card",
    name: "کارت",
    nameEn: "Card",
    description: "محفظه برای گروه‌بندی محتوای مرتبط",
    category: "display",
    examples: [
      {
        id: "default",
        title: "پیش‌فرض",
        description: "کارت ساده با عنوان و توضیحات",
        preview: (
          <Card className="w-full max-w-sm">
            <CardHeader>
              <CardTitle>عنوان کارت</CardTitle>
              <CardDescription>توضیحات مختصر درباره محتوای کارت</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                محتوای اصلی کارت در اینجا قرار می‌گیرد.
              </p>
            </CardContent>
          </Card>
        ),
        code: `<Card>
  <CardHeader>
    <CardTitle>عنوان کارت</CardTitle>
    <CardDescription>توضیحات مختصر</CardDescription>
  </CardHeader>
  <CardContent>
    <p>محتوای اصلی کارت</p>
  </CardContent>
</Card>`,
      },
      {
        id: "with-action",
        title: "با دکمه عمل",
        description: "کارت همراه با دکمه‌های عملیاتی",
        preview: (
          <Card className="w-full max-w-sm">
            <CardHeader>
              <CardTitle>اشتراک ویژه</CardTitle>
              <CardDescription>دسترسی به تمام امکانات</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-2xl font-bold">۹۹,۰۰۰ تومان</p>
              <Button className="w-full">خرید اشتراک</Button>
            </CardContent>
          </Card>
        ),
        code: `<Card>
  <CardHeader>
    <CardTitle>اشتراک ویژه</CardTitle>
    <CardDescription>دسترسی به تمام امکانات</CardDescription>
  </CardHeader>
  <CardContent className="space-y-4">
    <p className="text-2xl font-bold">۹۹,۰۰۰ تومان</p>
    <Button className="w-full">خرید اشتراک</Button>
  </CardContent>
</Card>`,
      },
      {
        id: "with-image",
        title: "با تصویر",
        description: "کارت همراه با تصویر و محتوا",
        preview: (
          <Card className="w-full max-w-sm overflow-hidden">
            <div className="aspect-video bg-muted flex items-center justify-center">
              <Star className="h-12 w-12 text-muted-foreground" />
            </div>
            <CardHeader>
              <CardTitle>عنوان مقاله</CardTitle>
              <CardDescription>نویسنده: نام نویسنده</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                این یک متن آزمایشی برای توضیحات کارت است که می‌تواند شامل اطلاعات بیشتری باشد.
              </p>
            </CardContent>
          </Card>
        ),
        code: `<Card className="overflow-hidden">
  <div className="aspect-video bg-muted flex items-center justify-center">
    <Star className="h-12 w-12 text-muted-foreground" />
  </div>
  <CardHeader>
    <CardTitle>عنوان مقاله</CardTitle>
    <CardDescription>نویسنده: نام نویسنده</CardDescription>
  </CardHeader>
  <CardContent>
    <p className="text-sm text-muted-foreground">
      این یک متن آزمایشی برای توضیحات کارت است.
    </p>
  </CardContent>
</Card>`,
      },
    ],
  },
  {
    slug: "table",
    name: "جدول",
    nameEn: "Table",
    description: "نمایش داده‌ها در قالب جدول",
    category: "display",
    examples: [
      {
        id: "default",
        title: "پیش‌فرض",
        description: "جدول ساده با سربرگ",
        preview: (
          <div className="w-full max-w-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-12">
                    <Checkbox />
                  </TableHead>
                  <TableHead>نام ستون</TableHead>
                  <TableHead>نام ستون</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <Checkbox />
                  </TableCell>
                  <TableCell>نام</TableCell>
                  <TableCell>نام</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Checkbox />
                  </TableCell>
                  <TableCell>نام</TableCell>
                  <TableCell>نام</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        ),
        code: `<Table>
  <TableHeader>
    <TableRow>
      <TableHead><Checkbox /></TableHead>
      <TableHead>نام ستون</TableHead>
      <TableHead>نام ستون</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell><Checkbox /></TableCell>
      <TableCell>نام</TableCell>
      <TableCell>نام</TableCell>
    </TableRow>
  </TableBody>
</Table>`,
      },
      {
        id: "with-sort",
        title: "با مرتب‌سازی",
        description: "جدول با قابلیت مرتب‌سازی ستون‌ها",
        preview: (
          <div className="w-full max-w-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-12">
                    <Checkbox />
                  </TableHead>
                  <TableHead>
                    <button className="flex items-center gap-1">
                      نام ستون
                      <ChevronDown className="h-4 w-4" />
                    </button>
                  </TableHead>
                  <TableHead>نام ستون</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <Checkbox />
                  </TableCell>
                  <TableCell>نام</TableCell>
                  <TableCell>نام</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        ),
        code: `<TableHead>
  <button className="flex items-center gap-1">
    نام ستون
    <ChevronDown className="h-4 w-4" />
  </button>
</TableHead>`,
      },
      {
        id: "with-actions",
        title: "با عملیات",
        description: "جدول همراه با دکمه‌های عملیاتی",
        preview: (
          <div className="w-full max-w-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>نام</TableHead>
                  <TableHead>وضعیت</TableHead>
                  <TableHead className="text-end">عملیات</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">محصول اول</TableCell>
                  <TableCell>
                    <Badge variant="secondary">فعال</Badge>
                  </TableCell>
                  <TableCell className="text-end">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Edit className="h-4 w-4 me-2" />
                          ویرایش
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">
                          <Trash2 className="h-4 w-4 me-2" />
                          حذف
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        ),
        code: `<Table>
  <TableHeader>
    <TableRow>
      <TableHead>نام</TableHead>
      <TableHead>وضعیت</TableHead>
      <TableHead className="text-end">عملیات</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">محصول اول</TableCell>
      <TableCell>
        <Badge variant="secondary">فعال</Badge>
      </TableCell>
      <TableCell className="text-end">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>ویرایش</DropdownMenuItem>
            <DropdownMenuItem className="text-destructive">حذف</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  </TableBody>
</Table>`,
      },
    ],
  },
  {
    slug: "tooltip",
    name: "راهنمای ابزار",
    nameEn: "Tooltip",
    description: "نمایش اطلاعات اضافی هنگام هاور روی عنصر",
    category: "display",
    examples: [
      {
        id: "default",
        title: "پیش‌فرض",
        description: "راهنمای ابزار ساده",
        preview: (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">هاور کنید</Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>این یک متن آزمایشی است</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ),
        code: `<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="outline">هاور کنید</Button>
    </TooltipTrigger>
    <TooltipContent>
      <p>این یک متن آزمایشی است</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>`,
      },
      {
        id: "positions",
        title: "موقعیت‌ها",
        description: "راهنمای ابزار در موقعیت‌های مختلف",
        preview: (
          <TooltipProvider>
            <div className="flex gap-4">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Info className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="top">
                  <p>بالا</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Info className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="bottom">
                  <p>پایین</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </TooltipProvider>
        ),
        code: `<Tooltip>
  <TooltipTrigger asChild>
    <Button variant="outline" size="icon">
      <Info className="h-4 w-4" />
    </Button>
  </TooltipTrigger>
  <TooltipContent side="top">
    <p>بالا</p>
  </TooltipContent>
</Tooltip>`,
      },
      {
        id: "with-delay",
        title: "با محتوای غنی",
        description: "راهنمای ابزار با محتوای بیشتر",
        preview: (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="secondary">
                  <User className="h-4 w-4 me-2" />
                  کاربر
                </Button>
              </TooltipTrigger>
              <TooltipContent className="max-w-xs">
                <div className="space-y-1">
                  <p className="font-medium">نام کاربر</p>
                  <p className="text-xs text-muted-foreground">
                    این یک توضیح طولانی‌تر درباره کاربر است.
                  </p>
                </div>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ),
        code: `<Tooltip>
  <TooltipTrigger asChild>
    <Button variant="secondary">
      <User className="h-4 w-4 me-2" />
      کاربر
    </Button>
  </TooltipTrigger>
  <TooltipContent className="max-w-xs">
    <div className="space-y-1">
      <p className="font-medium">نام کاربر</p>
      <p className="text-xs text-muted-foreground">این یک توضیح طولانی‌تر درباره کاربر است.</p>
    </div>
  </TooltipContent>
</Tooltip>`,
      },
    ],
  },
  // ===== FEEDBACK =====
  {
    slug: "progress",
    name: "نوار پیشرفت",
    nameEn: "Progress",
    description: "نمایش میزان پیشرفت یک عملیات",
    category: "feedback",
    examples: [
      {
        id: "default",
        title: "پیش‌فرض",
        description: "نوار پیشرفت خطی",
        preview: (
          <div className="w-full max-w-sm space-y-2">
            <div className="flex justify-between text-sm">
              <span>عنوان</span>
              <span>٪۶۰</span>
            </div>
            <Progress value={60} />
          </div>
        ),
        code: `<div className="flex justify-between text-sm">
  <span>عنوان</span>
  <span>٪۶۰</span>
</div>
<Progress value={60} />`,
      },
      {
        id: "circular",
        title: "دایره‌ای",
        description: "نوار پیشرفت دایره‌ای",
        preview: (
          <div className="flex flex-col items-center gap-2">
            <div className="relative h-24 w-24">
              <svg className="h-24 w-24 -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  strokeWidth="8"
                  fill="none"
                  className="stroke-muted"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  strokeWidth="8"
                  fill="none"
                  strokeLinecap="round"
                  className="stroke-primary"
                  strokeDasharray="${2 * Math.PI * 40 * 0.6} ${2 * Math.PI * 40}"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xl font-semibold">٪۶۰</span>
              </div>
            </div>
            <span className="text-sm text-muted-foreground">عنوان</span>
          </div>
        ),
        code: `<div className="relative h-24 w-24">
  <svg className="h-24 w-24 -rotate-90" viewBox="0 0 100 100">
    <circle cx="50" cy="50" r="40" strokeWidth="8" fill="none" className="stroke-muted" />
    <circle cx="50" cy="50" r="40" strokeWidth="8" fill="none" strokeLinecap="round"
      className="stroke-primary" strokeDasharray="..." />
  </svg>
  <div className="absolute inset-0 flex items-center justify-center">
    <span>٪۶۰</span>
  </div>
</div>`,
      },
      {
        id: "steps",
        title: "مراحل",
        description: "نمایش پیشرفت مرحله‌ای",
        preview: (
          <div className="w-full max-w-sm space-y-3">
            <div className="flex justify-between text-sm">
              <span>مرحله ۲ از ۴</span>
              <span>٪۵۰</span>
            </div>
            <Progress value={50} />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>اطلاعات</span>
              <span>پرداخت</span>
              <span>تایید</span>
              <span>پایان</span>
            </div>
          </div>
        ),
        code: `<div className="flex justify-between text-sm">
  <span>مرحله ۲ از ۴</span>
  <span>٪۵۰</span>
</div>
<Progress value={50} />
<div className="flex justify-between text-xs text-muted-foreground">
  <span>اطلاعات</span>
  <span>پرداخت</span>
  <span>تایید</span>
  <span>پایان</span>
</div>`,
      },
    ],
  },
  {
    slug: "loader",
    name: "بارگذاری",
    nameEn: "Loader",
    description: "نشانگر بارگذاری برای عملیات‌های در حال انجام",
    category: "feedback",
    examples: [
      {
        id: "default",
        title: "پیش‌فرض",
        description: "اسپینر دایره‌ای",
        preview: (
          <div className="flex items-center gap-6">
            <Loader2 className="h-6 w-6 animate-spin text-primary" />
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <Loader2 className="size-10 animate-spin text-primary" />
          </div>
        ),
        code: `<Loader2 className="h-6 w-6 animate-spin text-primary" />
<Loader2 className="h-8 w-8 animate-spin text-primary" />
<Loader2 className="size-10 animate-spin text-primary" />`,
      },
      {
        id: "ring",
        title: "حلقه‌ای",
        description: "نشانگر بارگذاری حلقه‌ای",
        preview: (
          <div className="relative h-20 w-20">
            <svg className="h-20 w-20 animate-spin" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="40" strokeWidth="8" fill="none" className="stroke-muted" />
              <circle
                cx="50"
                cy="50"
                r="40"
                strokeWidth="8"
                fill="none"
                strokeLinecap="round"
                className="stroke-primary"
                strokeDasharray="80 170"
              />
            </svg>
          </div>
        ),
        code: `<svg className="h-20 w-20 animate-spin" viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="40" strokeWidth="8" fill="none" className="stroke-muted" />
  <circle cx="50" cy="50" r="40" strokeWidth="8" fill="none" strokeLinecap="round"
    className="stroke-primary" strokeDasharray="80 170" />
</svg>`,
      },
      {
        id: "dots",
        title: "نقطه‌ای",
        description: "نشانگر بارگذاری با نقاط متحرک",
        preview: (
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              <span className="h-2 w-2 animate-bounce rounded-full bg-primary [animation-delay:-0.3s]" />
              <span className="h-2 w-2 animate-bounce rounded-full bg-primary [animation-delay:-0.15s]" />
              <span className="h-2 w-2 animate-bounce rounded-full bg-primary" />
            </div>
            <span className="text-sm text-muted-foreground">در حال بارگذاری</span>
          </div>
        ),
        code: `<div className="flex gap-1">
  <span className="h-2 w-2 animate-bounce rounded-full bg-primary [animation-delay:-0.3s]" />
  <span className="h-2 w-2 animate-bounce rounded-full bg-primary [animation-delay:-0.15s]" />
  <span className="h-2 w-2 animate-bounce rounded-full bg-primary" />
</div>
<span className="text-sm text-muted-foreground">در حال بارگذاری</span>`,
      },
    ],
  },
  {
    slug: "snackbar",
    name: "اسنک‌بار",
    nameEn: "Snackbar",
    description: "پیام‌های کوتاه و موقت برای بازخورد",
    category: "feedback",
    examples: [
      {
        id: "default",
        title: "پیش‌فرض",
        description: "اسنک‌بار با آیکون و دکمه بستن",
        preview: (
          <div className="flex items-center gap-3 rounded-lg border bg-background p-4 shadow-lg max-w-sm">
            <Info className="h-5 w-5 text-muted-foreground shrink-0" />
            <div className="flex-1 space-y-0.5">
              <p className="text-sm font-medium">عنوان</p>
              <p className="text-xs text-muted-foreground">متن توضیحات</p>
            </div>
            <Button variant="ghost" size="icon" className="h-8 w-8 shrink-0">
              <X className="h-4 w-4" />
            </Button>
          </div>
        ),
        code: `<div className="flex items-center gap-3 rounded-lg border bg-background p-4 shadow-lg">
  <Info className="h-5 w-5 text-muted-foreground shrink-0" />
  <div className="flex-1 space-y-0.5">
    <p className="text-sm font-medium">عنوان</p>
    <p className="text-xs text-muted-foreground">متن توضیحات</p>
  </div>
  <Button variant="ghost" size="icon"><X className="h-4 w-4" /></Button>
</div>`,
      },
      {
        id: "variants",
        title: "انواع",
        description: "اسنک‌بار در حالت‌های مختلف",
        preview: (
          <div className="flex flex-col gap-3 max-w-sm">
            <div className="flex items-center gap-3 rounded-lg border border-green-200 bg-green-50 p-3 dark:border-green-900 dark:bg-green-950">
              <CheckCircle className="h-5 w-5 text-green-600 shrink-0" />
              <p className="text-sm">عملیات با موفقیت انجام شد</p>
            </div>
            <div className="flex items-center gap-3 rounded-lg border border-red-200 bg-red-50 p-3 dark:border-red-900 dark:bg-red-950">
              <AlertCircle className="h-5 w-5 text-red-600 shrink-0" />
              <p className="text-sm">خطایی رخ داده است</p>
            </div>
          </div>
        ),
        code: `{/* موفقیت */}
<div className="flex items-center gap-3 rounded-lg border border-green-200 bg-green-50 p-3">
  <CheckCircle className="h-5 w-5 text-green-600" />
  <p>عملیات با موفقیت انجام شد</p>
</div>

{/* خطا */}
<div className="flex items-center gap-3 rounded-lg border border-red-200 bg-red-50 p-3">
  <AlertCircle className="h-5 w-5 text-red-600" />
  <p>خطایی رخ داده است</p>
</div>`,
      },
      {
        id: "with-action",
        title: "با عمل",
        description: "اسنک‌بار همراه با دکمه عمل",
        preview: (
          <div className="flex items-center justify-between gap-4 rounded-lg border bg-background p-4 shadow-lg max-w-sm">
            <div className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 shrink-0" />
              <p className="text-sm">فایل با موفقیت آپلود شد</p>
            </div>
            <Button variant="outline" size="sm">
              مشاهده
            </Button>
          </div>
        ),
        code: `<div className="flex items-center justify-between gap-4 rounded-lg border bg-background p-4 shadow-lg">
  <div className="flex items-center gap-3">
    <CheckCircle className="h-5 w-5 text-green-600 shrink-0" />
    <p className="text-sm">فایل با موفقیت آپلود شد</p>
  </div>
  <Button variant="outline" size="sm">مشاهده</Button>
</div>`,
      },
    ],
  },
  {
    slug: "skeleton",
    name: "اسکلت",
    nameEn: "Skeleton",
    description: "نمایش جایگزین در زمان بارگذاری محتوا",
    category: "feedback",
    examples: [
      {
        id: "default",
        title: "پیش‌فرض",
        description: "اسکلت برای پروفایل کاربر",
        preview: (
          <div className="flex items-center gap-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-50" />
              <Skeleton className="h-4 w-37.5" />
            </div>
          </div>
        ),
        code: `<div className="flex items-center gap-4">
  <Skeleton className="h-12 w-12 rounded-full" />
  <div className="space-y-2">
    <Skeleton className="h-4 w-50" />
    <Skeleton className="h-4 w-37.5" />
  </div>
</div>`,
      },
      {
        id: "card",
        title: "کارت",
        description: "اسکلت برای کارت محتوا",
        preview: (
          <Card className="w-52 max-w-sm">
            <CardHeader className="gap-2">
              <Skeleton className="h-5 w-1/2" />
              <Skeleton className="h-4 w-3/4" />
            </CardHeader>
            <CardContent className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
            </CardContent>
          </Card>
        ),
        code: `<Card className="w-full max-w-sm">
  <CardHeader className="gap-2">
    <Skeleton className="h-5 w-1/2" />
    <Skeleton className="h-4 w-3/4" />
  </CardHeader>
  <CardContent className="space-y-2">
    <Skeleton className="h-4 w-full" />
    <Skeleton className="h-4 w-full" />
  </CardContent>
</Card>`,
      },
      {
        id: "list",
        title: "لیست",
        description: "اسکلت برای لیست آیتم‌ها",
        preview: (
          <div className="w-full max-w-sm space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-4">
                <Skeleton className="size-8 rounded-full" />
                <div className="flex-1 space-y-2">
                  <Skeleton className="h-3 w-3/4" />
                  <Skeleton className="h-3 w-1/2" />
                </div>
                <Skeleton className="h-5 w-32" />
              </div>
            ))}
          </div>
        ),
        code: `<div className="space-y-4">
  {[1, 2, 3].map((i) => (
    <div key={i} className="flex items-center gap-4">
      <Skeleton className="size-10 rounded-full" />
      <div className="flex-1 space-y-2">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-3 w-1/2" />
      </div>
      <Skeleton className="h-8 w-16" />
    </div>
  ))}
</div>`,
      },
    ],
  },
  {
    slug: "banner",
    name: "بنر",
    nameEn: "Banner",
    description: "اعلان‌های برجسته برای پیام‌های مهم",
    category: "feedback",
    examples: [
      {
        id: "default",
        title: "پیش‌فرض",
        description: "بنر اطلاع‌رسانی",
        preview: (
          <div className="flex items-start gap-3 rounded-lg border bg-muted/50 p-4 max-w-md">
            <Info className="h-5 w-5 text-muted-foreground mt-0.5 shrink-0" />
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium">عنوان</p>
              <p className="text-sm text-muted-foreground">این متن آزمایشی است.</p>
            </div>
            <Button variant="ghost" size="icon" className="h-8 w-8 shrink-0">
              <X className="h-4 w-4" />
            </Button>
          </div>
        ),
        code: `<div className="flex items-start gap-3 rounded-lg border bg-muted/50 p-4">
  <Info className="h-5 w-5 text-muted-foreground mt-0.5 shrink-0" />
  <div className="flex-1 space-y-1">
    <p className="text-sm font-medium">عنوان</p>
    <p className="text-sm text-muted-foreground">این متن آزمایشی است.</p>
  </div>
  <Button variant="ghost" size="icon"><X className="h-4 w-4" /></Button>
</div>`,
      },
      {
        id: "warning",
        title: "هشدار",
        description: "بنر هشدار با رنگ متفاوت",
        preview: (
          <div className="flex items-start gap-3 rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-900 dark:bg-amber-950 max-w-md">
            <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5 shrink-0" />
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium text-amber-900 dark:text-amber-100">توجه</p>
              <p className="text-sm text-amber-800 dark:text-amber-200">این یک پیام هشدار است.</p>
            </div>
          </div>
        ),
        code: `<div className="flex items-start gap-3 rounded-lg border border-amber-200 bg-amber-50 p-4">
  <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5 shrink-0" />
  <div className="flex-1 space-y-1">
    <p className="text-sm font-medium text-amber-900">توجه</p>
    <p className="text-sm text-amber-800">این یک پیام هشدار است.</p>
  </div>
</div>`,
      },
      {
        id: "with-action",
        title: "با عمل",
        description: "بنر همراه با دکمه عمل",
        preview: (
          <div className="flex items-start gap-3 rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-900 dark:bg-blue-950 max-w-md">
            <Info className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" />
            <div className="flex-1 space-y-2">
              <p className="text-sm font-medium text-blue-900 dark:text-blue-100">
                به‌روزرسانی جدید
              </p>
              <p className="text-sm text-blue-800 dark:text-blue-200">
                نسخه جدید اپلیکیشن آماده نصب است.
              </p>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="h-7">
                  بعداً
                </Button>
                <Button size="sm" className="h-7">
                  به‌روزرسانی
                </Button>
              </div>
            </div>
          </div>
        ),
        code: `<div className="flex items-start gap-3 rounded-lg border border-blue-200 bg-blue-50 p-4">
  <Info className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" />
  <div className="flex-1 space-y-2">
    <p className="text-sm font-medium text-blue-900">به‌روزرسانی جدید</p>
    <p className="text-sm text-blue-800">نسخه جدید اپلیکیشن آماده نصب است.</p>
    <div className="flex gap-2">
      <Button size="sm" variant="outline" className="h-7">بعداً</Button>
      <Button size="sm" className="h-7">به‌روزرسانی</Button>
    </div>
  </div>
</div>`,
      },
    ],
  },
  // ===== NAVIGATION =====
  {
    slug: "tabs",
    name: "زبانه‌ها",
    nameEn: "Tabs",
    description: "ناوبری بین بخش‌های مختلف محتوا",
    category: "navigation",
    examples: [
      {
        id: "default",
        title: "پیش‌فرض",
        description: "زبانه‌های ساده",
        preview: (
          <Tabs defaultValue="tab1" className="w-full max-w-lg">
            <TabsList className="w-full">
              <TabsTrigger value="tab1" className="flex-1 gap-2">
                <Star className="h-4 w-4" />
                عنوان
              </TabsTrigger>
              <TabsTrigger value="tab2" className="flex-1">
                عنوان
              </TabsTrigger>
            </TabsList>
            <TabsContent value="tab1" className="mt-4">
              <p className="text-sm text-muted-foreground">محتوای زبانه اول</p>
            </TabsContent>
            <TabsContent value="tab2" className="mt-4">
              <p className="text-sm text-muted-foreground">محتوای زبانه دوم</p>
            </TabsContent>
          </Tabs>
        ),
        code: `<Tabs defaultValue="tab1">
  <TabsList className="w-full">
    <TabsTrigger value="tab1" className="flex-1 gap-2">
      <Star className="h-4 w-4" />
      عنوان
    </TabsTrigger>
    <TabsTrigger value="tab2" className="flex-1">عنوان</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">محتوای زبانه اول</TabsContent>
  <TabsContent value="tab2">محتوای زبانه دوم</TabsContent>
</Tabs>`,
      },
      {
        id: "segment",
        title: "بخش‌بندی",
        description: "کنترل بخش‌بندی",
        preview: (
          <Tabs defaultValue="opt1" className="w-full max-w-xs">
            <TabsList className="w-full">
              <TabsTrigger value="opt1" className="flex-1">
                عنوان
              </TabsTrigger>
              <TabsTrigger value="opt2" className="flex-1">
                عنوان
              </TabsTrigger>
            </TabsList>
          </Tabs>
        ),
        code: `<Tabs defaultValue="opt1">
  <TabsList className="w-full">
    <TabsTrigger value="opt1" className="flex-1">عنوان</TabsTrigger>
    <TabsTrigger value="opt2" className="flex-1">عنوان</TabsTrigger>
  </TabsList>
</Tabs>`,
      },
      {
        id: "with-badge",
        title: "با نشان",
        description: "زبانه‌ها همراه با نشان تعداد",
        preview: (
          <Tabs defaultValue="inbox" className="w-full max-w-md">
            <TabsList>
              <TabsTrigger value="inbox" className="gap-2">
                <Mail className="h-4 w-4" />
                صندوق ورودی
                <Badge variant="secondary" className="h-5 px-1.5 text-xs">
                  ۳
                </Badge>
              </TabsTrigger>
              <TabsTrigger value="sent" className="gap-2">
                ارسال شده
              </TabsTrigger>
              <TabsTrigger value="draft" className="gap-2">
                پیش‌نویس
                <Badge variant="outline" className="h-5 px-1.5 text-xs">
                  ۱
                </Badge>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="inbox" className="mt-4">
              <p className="text-sm text-muted-foreground">پیام‌های دریافتی</p>
            </TabsContent>
          </Tabs>
        ),
        code: `<Tabs defaultValue="inbox">
  <TabsList>
    <TabsTrigger value="inbox" className="gap-2">
      <Mail className="h-4 w-4" />
      صندوق ورودی
      <Badge variant="secondary" className="h-5 px-1.5 text-xs">۳</Badge>
    </TabsTrigger>
    <TabsTrigger value="sent" className="gap-2">
      ارسال شده
    </TabsTrigger>
    <TabsTrigger value="draft" className="gap-2">
      پیش‌نویس
      <Badge variant="outline" className="h-5 px-1.5 text-xs">۱</Badge>
    </TabsTrigger>
  </TabsList>
  <TabsContent value="inbox">پیام‌های دریافتی</TabsContent>
</Tabs>`,
      },
    ],
  },
  {
    slug: "breadcrumb",
    name: "مسیر راهنما",
    nameEn: "Breadcrumb",
    description: "نمایش مسیر ناوبری فعلی کاربر",
    category: "navigation",
    examples: [
      {
        id: "default",
        title: "پیش‌فرض",
        description: "مسیر راهنما ساده",
        preview: (
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="#">
                  <Home className="h-4 w-4" />
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronLeft className="h-4 w-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink href="#">صفحه قبلی</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronLeft className="h-4 w-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage>صفحه فعلی</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        ),
        code: `{/* استفاده از ChevronLeft برای RTL */}
<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="#"><Home className="h-4 w-4" /></BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator>
      <ChevronLeft className="h-4 w-4" />
    </BreadcrumbSeparator>
    <BreadcrumbItem>
      <BreadcrumbLink href="#">صفحه قبلی</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator>
      <ChevronLeft className="h-4 w-4" />
    </BreadcrumbSeparator>
    <BreadcrumbItem>
      <BreadcrumbPage>صفحه فعلی</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`,
      },
      {
        id: "with-dropdown",
        title: "با منوی کشویی",
        description: "مسیر راهنما با صفحات میانی مخفی",
        preview: (
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="#">خانه</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronLeft className="h-4 w-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center gap-1">
                    <MoreHorizontal className="h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    <DropdownMenuItem>بخش اول</DropdownMenuItem>
                    <DropdownMenuItem>بخش دوم</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronLeft className="h-4 w-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage>صفحه فعلی</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        ),
        code: `<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="#">خانه</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator><ChevronLeft className="h-4 w-4" /></BreadcrumbSeparator>
    <BreadcrumbItem>
      <DropdownMenu>
        <DropdownMenuTrigger><MoreHorizontal className="h-4 w-4" /></DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>بخش اول</DropdownMenuItem>
          <DropdownMenuItem>بخش دوم</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </BreadcrumbItem>
    ...
  </BreadcrumbList>
</Breadcrumb>`,
      },
      {
        id: "styled",
        title: "استایل‌دار",
        description: "مسیر راهنما با پس‌زمینه",
        preview: (
          <div className="rounded-lg bg-muted px-4 py-2">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="#" className="flex items-center gap-1">
                    <Home className="h-4 w-4" />
                    خانه
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <ChevronLeft className="h-4 w-4" />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">محصولات</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <ChevronLeft className="h-4 w-4" />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbPage className="font-medium">لباس</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        ),
        code: `<div className="rounded-lg bg-muted px-4 py-2">
  <Breadcrumb>
    <BreadcrumbList>
      <BreadcrumbItem>
        <BreadcrumbLink href="#" className="flex items-center gap-1">
          <Home className="h-4 w-4" />
          خانه
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator>
        <ChevronLeft className="h-4 w-4" />
      </BreadcrumbSeparator>
      <BreadcrumbItem>
        <BreadcrumbLink href="#">محصولات</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator>
        <ChevronLeft className="h-4 w-4" />
      </BreadcrumbSeparator>
      <BreadcrumbItem>
        <BreadcrumbPage className="font-medium">لباس</BreadcrumbPage>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>
</div>`,
      },
    ],
  },
  {
    slug: "pagination",
    name: "صفحه‌بندی",
    nameEn: "Pagination",
    description: "ناوبری بین صفحات محتوا",
    category: "navigation",
    examples: [
      {
        id: "default",
        title: "پیش‌فرض",
        description: "صفحه‌بندی ساده",
        preview: (
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">۱</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  ۲
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">۳</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        ),
        code: `<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">۱</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#" isActive>۲</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">۳</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>`,
      },
      {
        id: "extended",
        title: "گسترده",
        description: "صفحه‌بندی با صفحات بیشتر",
        preview: (
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">۱</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <span className="px-2">...</span>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">۱۰</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  ۱۱
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">۱۲</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <span className="px-2">...</span>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">۲۵</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        ),
        code: `<Pagination>
  <PaginationContent>
    <PaginationItem><PaginationPrevious href="#" /></PaginationItem>
    <PaginationItem><PaginationLink href="#">۱</PaginationLink></PaginationItem>
    <PaginationItem><span className="px-2">...</span></PaginationItem>
    <PaginationItem><PaginationLink href="#" isActive>۱۱</PaginationLink></PaginationItem>
    <PaginationItem><span className="px-2">...</span></PaginationItem>
    <PaginationItem><PaginationLink href="#">۲۵</PaginationLink></PaginationItem>
    <PaginationItem><PaginationNext href="#" /></PaginationItem>
  </PaginationContent>
</Pagination>`,
      },
      {
        id: "with-info",
        title: "با اطلاعات",
        description: "صفحه‌بندی همراه با نمایش تعداد",
        preview: (
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <p className="text-sm text-muted-foreground">نمایش ۱-۱۰ از ۱۰۰ نتیجه</p>
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>
                    ۱
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">۲</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">۳</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        ),
        code: `<div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
  <p className="text-sm text-muted-foreground">نمایش ۱-۱۰ از ۱۰۰ نتیجه</p>
  <Pagination>
    <PaginationContent>
      <PaginationItem>
        <PaginationPrevious href="#" />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#" isActive>۱</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">۲</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationNext href="#" />
      </PaginationItem>
    </PaginationContent>
  </Pagination>
</div>`,
      },
    ],
  },
  {
    slug: "bottom-navigation",
    name: "ناوبری پایین",
    nameEn: "Bottom Navigation",
    description: "نوار ناوبری ثابت در پایین صفحه برای موبایل",
    category: "navigation",
    examples: [
      {
        id: "default",
        title: "پیش‌فرض",
        description: "ناوبری پایین با آیکون",
        preview: (
          <div className="w-full max-w-sm rounded-lg border bg-background p-2">
            <div className="flex items-center justify-around">
              <button className="flex flex-col items-center gap-1 p-2 text-primary">
                <Home className="h-5 w-5" />
                <span className="text-xs">خانه</span>
              </button>
              <button className="flex flex-col items-center gap-1 p-2 text-muted-foreground">
                <Search className="h-5 w-5" />
                <span className="text-xs">جستجو</span>
              </button>
              <button className="flex flex-col items-center gap-1 p-2 text-muted-foreground">
                <Bell className="h-5 w-5" />
                <span className="text-xs">اعلان‌ها</span>
              </button>
              <button className="flex flex-col items-center gap-1 p-2 text-muted-foreground">
                <User className="h-5 w-5" />
                <span className="text-xs">پروفایل</span>
              </button>
            </div>
          </div>
        ),
        code: `<div className="flex items-center justify-around">
  <button className="flex flex-col items-center gap-1 p-2 text-primary">
    <Home className="h-5 w-5" />
    <span className="text-xs">خانه</span>
  </button>
  <button className="flex flex-col items-center gap-1 p-2 text-muted-foreground">
    <Search className="h-5 w-5" />
    <span className="text-xs">جستجو</span>
  </button>
  ...
</div>`,
      },
      {
        id: "icon-only",
        title: "فقط آیکون",
        description: "ناوبری پایین بدون متن",
        preview: (
          <div className="w-full max-w-sm rounded-lg border bg-background p-3">
            <div className="flex items-center justify-around">
              <button className="rounded-full p-3 text-primary bg-primary/10">
                <Home className="h-5 w-5" />
              </button>
              <button className="rounded-full p-3 text-muted-foreground hover:bg-accent">
                <Search className="h-5 w-5" />
              </button>
              <button className="rounded-full p-3 text-muted-foreground hover:bg-accent">
                <Bell className="h-5 w-5" />
              </button>
              <button className="rounded-full p-3 text-muted-foreground hover:bg-accent">
                <User className="h-5 w-5" />
              </button>
            </div>
          </div>
        ),
        code: `<div className="flex items-center justify-around">
  <button className="rounded-full p-3 text-primary bg-primary/10">
    <Home className="h-5 w-5" />
  </button>
  <button className="rounded-full p-3 text-muted-foreground hover:bg-accent">
    <Search className="h-5 w-5" />
  </button>
  ...
</div>`,
      },
      {
        id: "with-badge",
        title: "با نشان",
        description: "ناوبری پایین با نشان اعلان",
        preview: (
          <div className="w-full max-w-sm rounded-lg border bg-background p-2">
            <div className="flex items-center justify-around">
              <button className="flex flex-col items-center gap-1 p-2 text-primary">
                <Home className="h-5 w-5" />
                <span className="text-xs">خانه</span>
              </button>
              <button className="flex flex-col items-center gap-1 p-2 text-muted-foreground">
                <Search className="h-5 w-5" />
                <span className="text-xs">جستجو</span>
              </button>
              <button className="relative flex flex-col items-center gap-1 p-2 text-muted-foreground">
                <Bell className="h-5 w-5" />
                <span className="absolute top-1 end-1 flex h-4 w-4 items-center justify-center rounded-full bg-destructive text-[10px] text-destructive-foreground">
                  ۳
                </span>
                <span className="text-xs">اعلان‌ها</span>
              </button>
              <button className="flex flex-col items-center gap-1 p-2 text-muted-foreground">
                <User className="h-5 w-5" />
                <span className="text-xs">پروفایل</span>
              </button>
            </div>
          </div>
        ),
        code: `<div className="flex items-center justify-around">
  <button className="flex flex-col items-center gap-1 p-2 text-primary">
    <Home className="h-5 w-5" />
    <span className="text-xs">خانه</span>
  </button>
  <button className="relative flex flex-col items-center gap-1 p-2 text-muted-foreground">
    <Bell className="h-5 w-5" />
    <span className="absolute top-1 end-1 flex h-4 w-4 items-center justify-center rounded-full bg-destructive text-[10px] text-destructive-foreground">۳</span>
    <span className="text-xs">اعلان‌ها</span>
  </button>
  ...
</div>`,
      },
    ],
  },
  {
    slug: "menu-item",
    name: "آیتم منو",
    nameEn: "Menu Item",
    description: "آیتم‌های منو برای لیست‌های ناوبری",
    category: "navigation",
    examples: [
      {
        id: "default",
        title: "پیش‌فرض",
        description: "آیتم منو با آیکون و میانبر",
        preview: (
          <div className="w-full max-w-xs rounded-lg border bg-background">
            <button className="flex w-full items-center justify-between px-4 py-3 hover:bg-accent">
              <div className="flex items-center gap-3">
                <Star className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">عنوان</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <kbd className="rounded border bg-muted px-1.5 py-0.5 text-xs">⌘K</kbd>
                <ChevronLeft className="h-4 w-4" />
              </div>
            </button>
          </div>
        ),
        code: `<button className="flex w-full items-center justify-between px-4 py-3 hover:bg-accent">
  <div className="flex items-center gap-3">
    <Star className="h-4 w-4 text-muted-foreground" />
    <span className="text-sm">عنوان</span>
  </div>
  <div className="flex items-center gap-2 text-muted-foreground">
    <kbd className="rounded border bg-muted px-1.5 py-0.5 text-xs">⌘K</kbd>
    <ChevronLeft className="h-4 w-4" />
  </div>
</button>`,
      },
      {
        id: "list",
        title: "لیست",
        description: "چندین آیتم منو",
        preview: (
          <div className="w-full max-w-xs divide-y rounded-lg border bg-background">
            <button className="flex w-full items-center gap-3 px-4 py-3 hover:bg-accent">
              <Home className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">خانه</span>
            </button>
            <button className="flex w-full items-center gap-3 px-4 py-3 hover:bg-accent">
              <User className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">پروفایل</span>
            </button>
            <button className="flex w-full items-center gap-3 px-4 py-3 hover:bg-accent">
              <Settings className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">تنظیمات</span>
            </button>
          </div>
        ),
        code: `<div className="divide-y rounded-lg border bg-background">
  <button className="flex w-full items-center gap-3 px-4 py-3 hover:bg-accent">
    <Home className="h-4 w-4 text-muted-foreground" />
    <span className="text-sm">خانه</span>
  </button>
  <button className="flex w-full items-center gap-3 px-4 py-3 hover:bg-accent">
    <User className="h-4 w-4 text-muted-foreground" />
    <span className="text-sm">پروفایل</span>
  </button>
  ...
</div>`,
      },
      {
        id: "with-description",
        title: "با توضیحات",
        description: "آیتم منو با زیرعنوان",
        preview: (
          <div className="w-full max-w-xs divide-y rounded-lg border bg-background">
            <button className="flex w-full items-center gap-3 px-4 py-3 hover:bg-accent">
              <div className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <User className="h-5 w-5" />
              </div>
              <div className="flex flex-col items-start gap-0.5">
                <span className="text-sm font-medium">حساب کاربری</span>
                <span className="text-xs text-muted-foreground">مدیریت اطلاعات شخصی</span>
              </div>
            </button>
            <button className="flex w-full items-center gap-3 px-4 py-3 hover:bg-accent">
              <div className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Settings className="h-5 w-5" />
              </div>
              <div className="flex flex-col items-start gap-0.5">
                <span className="text-sm font-medium">تنظیمات</span>
                <span className="text-xs text-muted-foreground">پیکربندی برنامه</span>
              </div>
            </button>
          </div>
        ),
        code: `<div className="divide-y rounded-lg border bg-background">
  <button className="flex w-full items-center gap-3 px-4 py-3 hover:bg-accent">
    <div className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
      <User className="h-5 w-5" />
    </div>
    <div className="flex flex-col items-start gap-0.5">
      <span className="text-sm font-medium">حساب کاربری</span>
      <span className="text-xs text-muted-foreground">مدیریت اطلاعات شخصی</span>
    </div>
  </button>
  ...
</div>`,
      },
    ],
  },
  // ===== LAYOUT =====
  {
    slug: "accordion",
    name: "آکاردئون",
    nameEn: "Accordion",
    description: "محتوای قابل باز و بسته شدن",
    category: "layout",
    examples: [
      {
        id: "default",
        title: "پیش‌فرض",
        description: "آکاردئون ساده",
        preview: (
          <Accordion type="single" collapsible className="w-full max-w-md">
            <AccordionItem value="item-1">
              <AccordionTrigger>عنوان محتوا</AccordionTrigger>
              <AccordionContent>محل نمایش محتوای اصلی</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>عنوان دوم</AccordionTrigger>
              <AccordionContent>محتوای بخش دوم در اینجا نمایش داده می‌شود.</AccordionContent>
            </AccordionItem>
          </Accordion>
        ),
        code: `<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>عنوان محتوا</AccordionTrigger>
    <AccordionContent>محل نمایش محتوای اصلی</AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>عنوان دوم</AccordionTrigger>
    <AccordionContent>محتوای بخش دوم</AccordionContent>
  </AccordionItem>
</Accordion>`,
      },
      {
        id: "multiple",
        title: "چندگانه",
        description: "آکاردئون با چند بخش باز همزمان",
        preview: (
          <Accordion type="multiple" className="w-full max-w-md">
            <AccordionItem value="item-1">
              <AccordionTrigger>سوال اول</AccordionTrigger>
              <AccordionContent>پاسخ سوال اول در اینجا قرار می‌گیرد.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>سوال دوم</AccordionTrigger>
              <AccordionContent>پاسخ سوال دوم در اینجا قرار می‌گیرد.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>سوال سوم</AccordionTrigger>
              <AccordionContent>پاسخ سوال سوم در اینجا قرار می‌گیرد.</AccordionContent>
            </AccordionItem>
          </Accordion>
        ),
        code: `<Accordion type="multiple">
  <AccordionItem value="item-1">
    <AccordionTrigger>سوال اول</AccordionTrigger>
    <AccordionContent>پاسخ سوال اول</AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>سوال دوم</AccordionTrigger>
    <AccordionContent>پاسخ سوال دوم</AccordionContent>
  </AccordionItem>
</Accordion>`,
      },
      {
        id: "with-icon",
        title: "با آیکون",
        description: "آکاردئون با آیکون در عنوان",
        preview: (
          <Accordion type="single" collapsible className="w-full max-w-md">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <div className="flex items-center gap-2">
                  <Settings className="h-4 w-4" />
                  <span>تنظیمات عمومی</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>تنظیمات کلی برنامه در اینجا قرار می‌گیرد.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>حساب کاربری</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                اطلاعات حساب کاربری شما در اینجا نمایش داده می‌شود.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                <div className="flex items-center gap-2">
                  <Bell className="h-4 w-4" />
                  <span>اعلان‌ها</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>تنظیمات اعلان‌ها و هشدارها</AccordionContent>
            </AccordionItem>
          </Accordion>
        ),
        code: `<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>
      <div className="flex items-center gap-2">
        <Settings className="h-4 w-4" />
        <span>تنظیمات عمومی</span>
      </div>
    </AccordionTrigger>
    <AccordionContent>تنظیمات کلی برنامه</AccordionContent>
  </AccordionItem>
  ...
</Accordion>`,
      },
    ],
  },
  {
    slug: "carousel",
    name: "کاروسل",
    nameEn: "Carousel",
    description: "نمایش اسلایدی محتوا",
    category: "layout",
    examples: [
      {
        id: "default",
        title: "پیش‌فرض",
        description: "کاروسل ساده",
        preview: (
          <div className="relative w-full max-w-sm">
            <div className="overflow-hidden rounded-lg">
              <div className="flex">
                <div className="min-w-full bg-muted p-8 text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <div className="h-8 w-8 rounded bg-primary/20" />
                    <span className="font-medium">نام اسلاید</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-2 mt-4">
              <Button variant="outline" size="icon" className="h-8 w-8 bg-transparent">
                <ChevronRight className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="h-8 w-8 bg-transparent">
                <ChevronLeft className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ),
        code: `<div className="relative">
  <div className="overflow-hidden rounded-lg">
    <div className="flex">
      <div className="min-w-full bg-muted p-8 text-center">
        <span className="font-medium">نام اسلاید</span>
      </div>
    </div>
  </div>
  <div className="flex justify-center gap-2 mt-4">
    <Button variant="outline" size="icon">
      <ChevronRight className="h-4 w-4" />
    </Button>
    <Button variant="outline" size="icon">
      <ChevronLeft className="h-4 w-4" />
    </Button>
  </div>
</div>`,
      },
      {
        id: "with-indicators",
        title: "با نشانگر",
        description: "کاروسل با نقاط نشانگر",
        preview: (
          <div className="w-full max-w-sm">
            <div className="overflow-hidden rounded-lg bg-muted p-8 text-center">
              <span className="font-medium">اسلاید ۱ از ۳</span>
            </div>
            <div className="flex justify-center gap-1.5 mt-4">
              <span className="h-2 w-2 rounded-full bg-primary" />
              <span className="h-2 w-2 rounded-full bg-muted-foreground/30" />
              <span className="h-2 w-2 rounded-full bg-muted-foreground/30" />
            </div>
          </div>
        ),
        code: `<div className="overflow-hidden rounded-lg bg-muted p-8 text-center">
  <span>اسلاید ۱ از ۳</span>
</div>
<div className="flex justify-center gap-1.5 mt-4">
  <span className="h-2 w-2 rounded-full bg-primary" />
  <span className="h-2 w-2 rounded-full bg-muted-foreground/30" />
  <span className="h-2 w-2 rounded-full bg-muted-foreground/30" />
</div>`,
      },
      {
        id: "card-carousel",
        title: "کارت کاروسل",
        description: "کاروسل با کارت‌های محتوا",
        preview: (
          <div className="w-full max-w-md">
            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
              <div className="min-w-50 shrink-0 rounded-lg border bg-card p-4">
                <div className="h-24 rounded-md bg-muted mb-3" />
                <h4 className="font-medium text-sm">عنوان کارت</h4>
                <p className="text-xs text-muted-foreground mt-1">
                  توضیحات کارت اینجا نوشته می‌شود
                </p>
              </div>
              <div className="min-w-50 shrink-0 rounded-lg border bg-card p-4">
                <div className="h-24 rounded-md bg-muted mb-3" />
                <h4 className="font-medium text-sm">عنوان کارت</h4>
                <p className="text-xs text-muted-foreground mt-1">
                  توضیحات کارت اینجا نوشته می‌شود
                </p>
              </div>
              <div className="min-w-50 shrink-0 rounded-lg border bg-card p-4">
                <div className="h-24 rounded-md bg-muted mb-3" />
                <h4 className="font-medium text-sm">عنوان کارت</h4>
                <p className="text-xs text-muted-foreground mt-1">
                  توضیحات کارت اینجا نوشته می‌شود
                </p>
              </div>
            </div>
          </div>
        ),
        code: `<div className="flex gap-4 overflow-x-auto pb-4">
  <div className="min-w-50 shrink-0 rounded-lg border bg-card p-4">
    <div className="h-24 rounded-md bg-muted mb-3" />
    <h4 className="font-medium text-sm">عنوان کارت</h4>
    <p className="text-xs text-muted-foreground mt-1">توضیحات</p>
  </div>
  <div className="min-w-50 shrink-0 rounded-lg border bg-card p-4">
    ...
  </div>
</div>`,
      },
    ],
  },
  // ===== OVERLAY =====
  {
    slug: "dropdown-menu",
    name: "منوی کشویی",
    nameEn: "Dropdown Menu",
    description: "منوی کشویی با گزینه‌های مختلف",
    category: "overlay",
    examples: [
      {
        id: "default",
        title: "پیش‌فرض",
        description: "منوی کشویی ساده",
        preview: (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button>
                عنوان
                <ChevronDown className="h-4 w-4 ms-2" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>عنوان</DropdownMenuItem>
              <DropdownMenuItem>عنوان</DropdownMenuItem>
              <DropdownMenuItem>عنوان</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ),
        code: `<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button>
      عنوان
      <ChevronDown className="h-4 w-4 ms-2" />
    </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>عنوان</DropdownMenuItem>
    <DropdownMenuItem>عنوان</DropdownMenuItem>
    <DropdownMenuItem>عنوان</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`,
      },
      {
        id: "with-search",
        title: "با جستجو",
        description: "منوی کشویی همراه با فیلد جستجو",
        preview: (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                انتخاب کنید
                <ChevronDown className="h-4 w-4 ms-2" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <div className="p-2">
                <div className="relative">
                  <Search className="absolute start-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input placeholder="جستجو" className="ps-8 h-8" />
                </div>
              </div>
              <DropdownMenuItem>گزینه اول</DropdownMenuItem>
              <DropdownMenuItem>گزینه دوم</DropdownMenuItem>
              <DropdownMenuItem>گزینه سوم</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ),
        code: `<DropdownMenuContent className="w-56">
  <div className="p-2">
    <div className="relative">
      <Search className="absolute start-2 top-1/2 h-4 w-4 -translate-y-1/2" />
      <Input placeholder="جستجو" className="ps-8 h-8" />
    </div>
  </div>
  <DropdownMenuItem>گزینه اول</DropdownMenuItem>
  ...
</DropdownMenuContent>`,
      },
      {
        id: "with-icons",
        title: "با آیکون",
        description: "منوی کشویی با آیکون و جداکننده",
        preview: (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <Edit className="h-4 w-4 me-2" />
                ویرایش
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Copy className="h-4 w-4 me-2" />
                کپی
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-destructive">
                <Trash2 className="h-4 w-4 me-2" />
                حذف
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ),
        code: `<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline" size="icon">
      <MoreHorizontal className="h-4 w-4" />
    </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent align="end">
    <DropdownMenuItem>
      <Edit className="h-4 w-4 me-2" />
      ویرایش
    </DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem className="text-destructive">
      <Trash2 className="h-4 w-4 me-2" />
      حذف
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`,
      },
    ],
  },
  {
    slug: "drawer",
    name: "کشو",
    nameEn: "Drawer Menu",
    description: "پنل کشویی از کنار صفحه",
    category: "overlay",
    examples: [
      {
        id: "default",
        title: "پیش‌فرض",
        description: "کشو از سمت راست (برای RTL)",
        preview: (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">
                <Menu className="h-4 w-4 me-2" />
                منو
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>عنوان</SheetTitle>
                <SheetDescription>
                  محل قرارگیری محتوا که می‌تواند با کامپوننت جایگزین شود.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        ),
        code: `{/* استفاده از side="right" برای RTL */}
<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">
      <Menu className="h-4 w-4 me-2" />
      منو
    </Button>
  </SheetTrigger>
  <SheetContent side="right">
    <SheetHeader>
      <SheetTitle>عنوان</SheetTitle>
      <SheetDescription>
        محل قرارگیری محتوا که می‌تواند با کامپوننت جایگزین شود.
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>`,
      },
      {
        id: "bottom",
        title: "از پایین",
        description: "کشو از پایین صفحه (مناسب موبایل)",
        preview: (
          <Sheet>
            <SheetTrigger asChild>
              <Button>کشو پایین</Button>
            </SheetTrigger>
            <SheetContent side="bottom" className="h-[50vh]">
              <SheetHeader>
                <SheetTitle>عنوان</SheetTitle>
                <SheetDescription>این کشو از پایین صفحه باز می‌شود.</SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        ),
        code: `<Sheet>
  <SheetTrigger asChild>
    <Button>کشو پایین</Button>
  </SheetTrigger>
  <SheetContent side="bottom" className="h-[50vh]">
    <SheetHeader>
      <SheetTitle>عنوان</SheetTitle>
      <SheetDescription>این کشو از پایین صفحه باز می‌شود.</SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>`,
      },
      {
        id: "with-nav",
        title: "با ناوبری",
        description: "کشو همراه با منوی ناوبری",
        preview: (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetHeader>
                <SheetTitle>منو</SheetTitle>
              </SheetHeader>
              <nav className="mt-6 space-y-1">
                <a
                  href="#"
                  className="flex items-center gap-3 rounded-md bg-accent px-3 py-2 text-sm font-medium"
                >
                  <Home className="h-4 w-4" />
                  خانه
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-accent"
                >
                  <User className="h-4 w-4" />
                  پروفایل
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-accent"
                >
                  <Settings className="h-4 w-4" />
                  تنظیمات
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        ),
        code: `<Sheet>
  <SheetTrigger asChild>
    <Button variant="ghost" size="icon">
      <Menu className="h-5 w-5" />
    </Button>
  </SheetTrigger>
  <SheetContent side="right" className="w-72">
    <SheetHeader>
      <SheetTitle>منو</SheetTitle>
    </SheetHeader>
    <nav className="mt-6 space-y-1">
      <a href="#" className="flex items-center gap-3 rounded-md bg-accent px-3 py-2 text-sm font-medium">
        <Home className="h-4 w-4" />
        خانه
      </a>
      ...
    </nav>
  </SheetContent>
</Sheet>`,
      },
    ],
  },
  {
    slug: "dialog",
    name: "دیالوگ",
    nameEn: "Modal Dialog",
    description: "پنجره مودال برای نمایش محتوای مهم",
    category: "overlay",
    examples: [
      {
        id: "default",
        title: "پیش‌فرض",
        description: "دیالوگ ساده",
        preview: (
          <Dialog>
            <DialogTrigger asChild>
              <Button>باز کردن دیالوگ</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>عنوان</DialogTitle>
                <DialogDescription>
                  محل قرارگیری محتوا که می‌تواند با کامپوننت جایگزین شود.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        ),
        code: `<Dialog>
  <DialogTrigger asChild>
    <Button>باز کردن دیالوگ</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>عنوان</DialogTitle>
      <DialogDescription>
        محل قرارگیری محتوا که می‌تواند با کامپوننت جایگزین شود.
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>`,
      },
      {
        id: "with-form",
        title: "با فرم",
        description: "دیالوگ همراه با فرم ورودی",
        preview: (
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">ویرایش پروفایل</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>ویرایش پروفایل</DialogTitle>
                <DialogDescription>اطلاعات پروفایل خود را ویرایش کنید.</DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="name">نام</Label>
                  <Input id="name" placeholder="نام خود را وارد کنید" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">ایمیل</Label>
                  <Input id="email" type="email" placeholder="example@email.com" dir="ltr" />
                </div>
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="outline">انصراف</Button>
                <Button>ذخیره</Button>
              </div>
            </DialogContent>
          </Dialog>
        ),
        code: `<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline">ویرایش پروفایل</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>ویرایش پروفایل</DialogTitle>
      <DialogDescription>اطلاعات پروفایل خود را ویرایش کنید.</DialogDescription>
    </DialogHeader>
    <div className="space-y-4 py-4">
      <div className="space-y-2">
        <Label htmlFor="name">نام</Label>
        <Input id="name" placeholder="نام خود را وارد کنید" />
      </div>
    </div>
    <div className="flex justify-end gap-2">
      <Button variant="outline">انصراف</Button>
      <Button>ذخیره</Button>
    </div>
  </DialogContent>
</Dialog>`,
      },
      {
        id: "scrollable",
        title: "قابل اسکرول",
        description: "دیالوگ با محتوای طولانی",
        preview: (
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">قوانین و شرایط</Button>
            </DialogTrigger>
            <DialogContent className="max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>قوانین و شرایط استفاده</DialogTitle>
                <DialogDescription>لطفاً قوانین زیر را به دقت مطالعه کنید.</DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4 text-sm text-muted-foreground">
                <p>۱. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است.</p>
                <p>۲. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است.</p>
                <p>۳. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است.</p>
                <p>۴. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است.</p>
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="outline">انصراف</Button>
                <Button>پذیرش</Button>
              </div>
            </DialogContent>
          </Dialog>
        ),
        code: `<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline">قوانین و شرایط</Button>
  </DialogTrigger>
  <DialogContent className="max-h-[80vh] overflow-y-auto">
    <DialogHeader>
      <DialogTitle>قوانین و شرایط استفاده</DialogTitle>
      <DialogDescription>لطفاً قوانین زیر را مطالعه کنید.</DialogDescription>
    </DialogHeader>
    <div className="space-y-4 py-4 text-sm text-muted-foreground">
      <p>۱. متن قانون اول...</p>
      <p>۲. متن قانون دوم...</p>
    </div>
    <div className="flex justify-end gap-2">
      <Button variant="outline">انصراف</Button>
      <Button>پذیرش</Button>
    </div>
  </DialogContent>
</Dialog>`,
      },
    ],
  },
  {
    slug: "alert-dialog",
    name: "دیالوگ تایید",
    nameEn: "Alert Dialog",
    description: "دیالوگ برای تایید عملیات مهم",
    category: "overlay",
    examples: [
      {
        id: "default",
        title: "پیش‌فرض",
        description: "دیالوگ تایید حذف",
        preview: (
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="destructive">حذف</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>آیا مطمئن هستید؟</AlertDialogTitle>
                <AlertDialogDescription>
                  این عملیات قابل بازگشت نیست. این کار داده‌ها را برای همیشه حذف خواهد کرد.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter className="gap-2">
                <AlertDialogCancel>انصراف</AlertDialogCancel>
                <AlertDialogAction>تایید</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        ),
        code: `<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button variant="destructive">حذف</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>آیا مطمئن هستید؟</AlertDialogTitle>
      <AlertDialogDescription>
        این عملیات قابل بازگشت نیست.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter className="gap-2">
      <AlertDialogCancel>انصراف</AlertDialogCancel>
      <AlertDialogAction>تایید</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`,
      },
      {
        id: "warning",
        title: "هشدار",
        description: "دیالوگ هشدار با آیکون",
        preview: (
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline">خروج از حساب</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle className="flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-amber-500" />
                  خروج از حساب کاربری
                </AlertDialogTitle>
                <AlertDialogDescription>
                  آیا می‌خواهید از حساب کاربری خود خارج شوید؟
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter className="gap-2">
                <AlertDialogCancel>انصراف</AlertDialogCancel>
                <AlertDialogAction>خروج</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        ),
        code: `<AlertDialogHeader>
  <AlertDialogTitle className="flex items-center gap-2">
    <AlertCircle className="h-5 w-5 text-amber-500" />
    خروج از حساب کاربری
  </AlertDialogTitle>
  <AlertDialogDescription>
    آیا می‌خواهید از حساب کاربری خود خارج شوید؟
  </AlertDialogDescription>
</AlertDialogHeader>`,
      },
      {
        id: "destructive",
        title: "خطرناک",
        description: "دیالوگ تایید عملیات خطرناک",
        preview: (
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="destructive">حذف حساب</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle className="flex items-center gap-2 text-destructive">
                  <Trash2 className="h-5 w-5" />
                  حذف حساب کاربری
                </AlertDialogTitle>
                <AlertDialogDescription>
                  این عملیات غیرقابل بازگشت است. تمام داده‌ها، فایل‌ها و اطلاعات شما برای همیشه حذف
                  خواهند شد.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter className="gap-2">
                <AlertDialogCancel>انصراف</AlertDialogCancel>
                <AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
                  حذف حساب
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        ),
        code: `<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button variant="destructive">حذف حساب</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle className="flex items-center gap-2 text-destructive">
        <Trash2 className="h-5 w-5" />
        حذف حساب کاربری
      </AlertDialogTitle>
      <AlertDialogDescription>
        این عملیات غیرقابل بازگشت است.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter className="gap-2">
      <AlertDialogCancel>انصراف</AlertDialogCancel>
      <AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
        حذف حساب
      </AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`,
      },
    ],
  },
  {
    slug: "popover",
    name: "پاپ‌اور",
    nameEn: "Popover",
    description: "پنجره شناور برای نمایش محتوای اضافی",
    category: "overlay",
    examples: [
      {
        id: "default",
        title: "پیش‌فرض",
        description: "پاپ‌اور ساده",
        preview: (
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">باز کردن</Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="space-y-2">
                <h4 className="font-medium">عنوان</h4>
                <p className="text-sm text-muted-foreground">
                  محل قرارگیری محتوا که می‌تواند با کامپوننت جایگزین شود.
                </p>
              </div>
            </PopoverContent>
          </Popover>
        ),
        code: `<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">باز کردن</Button>
  </PopoverTrigger>
  <PopoverContent className="w-80">
    <div className="space-y-2">
      <h4 className="font-medium">عنوان</h4>
      <p className="text-sm text-muted-foreground">
        محل قرارگیری محتوا که می‌تواند با کامپوننت جایگزین شود.
      </p>
    </div>
  </PopoverContent>
</Popover>`,
      },
      {
        id: "with-form",
        title: "با فرم",
        description: "پاپ‌اور همراه با فرم",
        preview: (
          <Popover>
            <PopoverTrigger asChild>
              <Button>
                <Settings className="h-4 w-4 me-2" />
                تنظیمات
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="space-y-4">
                <h4 className="font-medium">تنظیمات سریع</h4>
                <div className="flex items-center justify-between">
                  <Label htmlFor="dark">حالت تاریک</Label>
                  <Switch id="dark" />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="notif">اعلان‌ها</Label>
                  <Switch id="notif" defaultChecked />
                </div>
              </div>
            </PopoverContent>
          </Popover>
        ),
        code: `<Popover>
  <PopoverTrigger asChild>
    <Button><Settings className="h-4 w-4 me-2" />تنظیمات</Button>
  </PopoverTrigger>
  <PopoverContent className="w-80">
    <div className="space-y-4">
      <h4 className="font-medium">تنظیمات سریع</h4>
      <div className="flex items-center justify-between">
        <Label htmlFor="dark">حالت تاریک</Label>
        <Switch id="dark" />
      </div>
    </div>
  </PopoverContent>
</Popover>`,
      },
      {
        id: "date-picker",
        title: "انتخاب تاریخ",
        description: "پاپ‌اور برای انتخاب تاریخ",
        preview: (
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="justify-start gap-2">
                <Calendar className="h-4 w-4" />
                انتخاب تاریخ
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <div className="p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <Button variant="ghost" size="icon" className="h-7 w-7">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                  <span className="text-sm font-medium">اردیبهشت ۱۴۰۳</span>
                  <Button variant="ghost" size="icon" className="h-7 w-7">
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                </div>
                <div className="grid grid-cols-7 gap-1 text-center text-xs">
                  <span className="text-muted-foreground">ش</span>
                  <span className="text-muted-foreground">ی</span>
                  <span className="text-muted-foreground">د</span>
                  <span className="text-muted-foreground">س</span>
                  <span className="text-muted-foreground">چ</span>
                  <span className="text-muted-foreground">پ</span>
                  <span className="text-muted-foreground">ج</span>
                  <span className="p-1.5">۱</span>
                  <span className="p-1.5">۲</span>
                  <span className="p-1.5 rounded bg-primary text-primary-foreground">۳</span>
                  <span className="p-1.5">۴</span>
                  <span className="p-1.5">۵</span>
                  <span className="p-1.5">۶</span>
                  <span className="p-1.5">۷</span>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        ),
        code: `<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline" className="justify-start gap-2">
      <Calendar className="h-4 w-4" />
      انتخاب تاریخ
    </Button>
  </PopoverTrigger>
  <PopoverContent className="w-auto p-0" align="start">
    <div className="p-4 space-y-3">
      <div className="flex items-center justify-between">
        <Button variant="ghost" size="icon">
          <ChevronRight className="h-4 w-4" />
        </Button>
        <span className="text-sm font-medium">اردیبهشت ۱۴۰۳</span>
        <Button variant="ghost" size="icon">
          <ChevronLeft className="h-4 w-4" />
        </Button>
      </div>
      {/* Calendar grid */}
    </div>
  </PopoverContent>
</Popover>`,
      },
    ],
  },
  {
    slug: "bottom-sheet",
    name: "صفحه پایین",
    nameEn: "Bottom Sheet",
    description: "پنل کشویی از پایین صفحه برای موبایل",
    category: "overlay",
    examples: [
      {
        id: "default",
        title: "پیش‌فرض",
        description: "صفحه پایین ساده",
        preview: (
          <Sheet>
            <SheetTrigger asChild>
              <Button>باز کردن</Button>
            </SheetTrigger>
            <SheetContent side="bottom" className="h-auto">
              <SheetHeader>
                <SheetTitle>عنوان</SheetTitle>
              </SheetHeader>
              <div className="py-4">
                <p className="text-sm text-muted-foreground">
                  محل قرارگیری محتوا که می‌تواند با کامپوننت جایگزین شود.
                </p>
              </div>
            </SheetContent>
          </Sheet>
        ),
        code: `<Sheet>
  <SheetTrigger asChild>
    <Button>باز کردن</Button>
  </SheetTrigger>
  <SheetContent side="bottom" className="h-auto">
    <SheetHeader>
      <SheetTitle>عنوان</SheetTitle>
    </SheetHeader>
    <div className="py-4">
      <p className="text-sm text-muted-foreground">
        محل قرارگیری محتوا که می‌تواند با کامپوننت جایگزین شود.
      </p>
    </div>
  </SheetContent>
</Sheet>`,
      },
      {
        id: "with-actions",
        title: "با عملیات",
        description: "صفحه پایین همراه با دکمه‌های عمل",
        preview: (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">عملیات</Button>
            </SheetTrigger>
            <SheetContent side="bottom" className="h-auto">
              <SheetHeader>
                <SheetTitle>انتخاب عملیات</SheetTitle>
              </SheetHeader>
              <div className="grid gap-2 py-4">
                <Button variant="ghost" className="justify-start gap-2">
                  <Edit className="h-4 w-4" />
                  ویرایش
                </Button>
                <Button variant="ghost" className="justify-start gap-2">
                  <Copy className="h-4 w-4" />
                  کپی
                </Button>
                <Button variant="ghost" className="justify-start gap-2">
                  <Share className="h-4 w-4" />
                  اشتراک‌گذاری
                </Button>
                <Button variant="ghost" className="justify-start gap-2 text-destructive">
                  <Trash2 className="h-4 w-4" />
                  حذف
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        ),
        code: `<SheetContent side="bottom" className="h-auto">
  <SheetHeader>
    <SheetTitle>انتخاب عملیات</SheetTitle>
  </SheetHeader>
  <div className="grid gap-2 py-4">
    <Button variant="ghost" className="justify-start gap-2">
      <Edit className="h-4 w-4" />
      ویرایش
    </Button>
    <Button variant="ghost" className="justify-start gap-2 text-destructive">
      <Trash2 className="h-4 w-4" />
      حذف
    </Button>
  </div>
</SheetContent>`,
      },
      {
        id: "with-handle",
        title: "با دستگیره",
        description: "صفحه پایین با دستگیره کشیدن",
        preview: (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">فیلترها</Button>
            </SheetTrigger>
            <SheetContent side="bottom" className="h-auto">
              <div className="mx-auto mt-2 h-1.5 w-12 rounded-full bg-muted" />
              <SheetHeader className="mt-4">
                <SheetTitle>فیلترها</SheetTitle>
              </SheetHeader>
              <div className="space-y-4 py-4">
                <div className="flex items-center justify-between">
                  <Label>فقط موجود</Label>
                  <Switch />
                </div>
                <div className="flex items-center justify-between">
                  <Label>ارسال رایگان</Label>
                  <Switch defaultChecked />
                </div>
                <div className="space-y-2">
                  <Label>محدوده قیمت</Label>
                  <Slider defaultValue={[25, 75]} max={100} step={1} />
                </div>
              </div>
              <Button className="w-full">اعمال فیلتر</Button>
            </SheetContent>
          </Sheet>
        ),
        code: `<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">فیلترها</Button>
  </SheetTrigger>
  <SheetContent side="bottom" className="h-auto">
    <div className="mx-auto mt-2 h-1.5 w-12 rounded-full bg-muted" />
    <SheetHeader className="mt-4">
      <SheetTitle>فیلترها</SheetTitle>
    </SheetHeader>
    <div className="space-y-4 py-4">
      <div className="flex items-center justify-between">
        <Label>فقط موجود</Label>
        <Switch />
      </div>
      <div className="space-y-2">
        <Label>محدوده قیمت</Label>
        <Slider defaultValue={[25, 75]} max={100} step={1} />
      </div>
    </div>
    <Button className="w-full">اعمال فیلتر</Button>
  </SheetContent>
</Sheet>`,
      },
    ],
  },
  // ===== INPUTS - Field Component =====
  {
    slug: "field",
    name: "فیلد",
    nameEn: "Field",
    description: "کامپوننت فیلد برای ساخت فرم‌های دسترسی‌پذیر با برچسب، توضیحات و خطا",
    category: "inputs",
    isNew: true,
    examples: [
      {
        id: "default",
        title: "پیش‌فرض",
        description: "فیلد ساده با برچسب و توضیحات",
        preview: (
          <div className="w-full max-w-sm">
            <Field>
              <FieldLabel htmlFor="email-field">ایمیل</FieldLabel>
              <Input id="email-field" type="email" placeholder="example@email.com" />
              <FieldDescription>ایمیل خود را وارد کنید.</FieldDescription>
            </Field>
          </div>
        ),
        code: `<Field>
  <FieldLabel htmlFor="email">ایمیل</FieldLabel>
  <Input id="email" type="email" placeholder="example@email.com" />
  <FieldDescription>ایمیل خود را وارد کنید.</FieldDescription>
</Field>`,
      },
      {
        id: "with-error",
        title: "با خطا",
        description: "فیلد همراه با نمایش پیام خطا",
        preview: (
          <div className="w-full max-w-sm">
            <Field data-invalid>
              <FieldLabel htmlFor="email-error">ایمیل</FieldLabel>
              <Input id="email-error" type="email" aria-invalid placeholder="email@" />
              <FieldError>یک آدرس ایمیل معتبر وارد کنید.</FieldError>
            </Field>
          </div>
        ),
        code: `<Field data-invalid>
  <FieldLabel htmlFor="email">ایمیل</FieldLabel>
  <Input id="email" type="email" aria-invalid />
  <FieldError>یک آدرس ایمیل معتبر وارد کنید.</FieldError>
</Field>`,
      },
      {
        id: "horizontal",
        title: "افقی",
        description: "فیلد با چیدمان افقی",
        preview: (
          <div className="w-full max-w-md">
            <Field orientation="horizontal">
              <FieldLabel htmlFor="name-horizontal">نام کاربری</FieldLabel>
              <Input id="name-horizontal" placeholder="نام کاربری" />
            </Field>
          </div>
        ),
        code: `<Field orientation="horizontal">
  <FieldLabel htmlFor="name">نام کاربری</FieldLabel>
  <Input id="name" placeholder="نام کاربری" />
</Field>`,
      },
      {
        id: "field-group",
        title: "گروه فیلدها",
        description: "چند فیلد در یک گروه",
        preview: (
          <div className="w-full max-w-sm">
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="firstname">نام</FieldLabel>
                <Input id="firstname" placeholder="نام خود را وارد کنید" />
              </Field>
              <Field>
                <FieldLabel htmlFor="lastname">نام خانوادگی</FieldLabel>
                <Input id="lastname" placeholder="نام خانوادگی خود را وارد کنید" />
              </Field>
              <Field>
                <FieldLabel htmlFor="phone">شماره تماس</FieldLabel>
                <Input id="phone" type="tel" placeholder="۰۹۱۲۳۴۵۶۷۸۹" dir="ltr" className="text-left" />
                <FieldDescription>شماره تلفن همراه ۱۱ رقمی</FieldDescription>
              </Field>
            </FieldGroup>
          </div>
        ),
        code: `<FieldGroup>
  <Field>
    <FieldLabel htmlFor="firstname">نام</FieldLabel>
    <Input id="firstname" placeholder="نام خود را وارد کنید" />
  </Field>
  <Field>
    <FieldLabel htmlFor="lastname">نام خانوادگی</FieldLabel>
    <Input id="lastname" placeholder="نام خانوادگی خود را وارد کنید" />
  </Field>
  <Field>
    <FieldLabel htmlFor="phone">شماره تماس</FieldLabel>
    <Input id="phone" type="tel" placeholder="۰۹۱۲۳۴۵۶۷۸۹" dir="ltr" />
    <FieldDescription>شماره تلفن همراه ۱۱ رقمی</FieldDescription>
  </Field>
</FieldGroup>`,
      },
    ],
  },
  // ===== FEEDBACK - Empty State =====
  {
    slug: "empty",
    name: "حالت خالی",
    nameEn: "Empty State",
    description: "نمایش حالت خالی برای زمانی که محتوایی وجود ندارد",
    category: "feedback",
    isNew: true,
    examples: [
      {
        id: "default",
        title: "پیش‌فرض",
        description: "حالت خالی ساده با آیکون و متن",
        preview: (
          <Empty className="border">
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <Inbox className="size-5" />
              </EmptyMedia>
              <EmptyTitle>هیچ پیامی وجود ندارد</EmptyTitle>
              <EmptyDescription>
                صندوق ورودی شما خالی است. پیام‌های جدید اینجا نمایش داده می‌شوند.
              </EmptyDescription>
            </EmptyHeader>
          </Empty>
        ),
        code: `<Empty className="border">
  <EmptyHeader>
    <EmptyMedia variant="icon">
      <Inbox className="size-5" />
    </EmptyMedia>
    <EmptyTitle>هیچ پیامی وجود ندارد</EmptyTitle>
    <EmptyDescription>
      صندوق ورودی شما خالی است. پیام‌های جدید اینجا نمایش داده می‌شوند.
    </EmptyDescription>
  </EmptyHeader>
</Empty>`,
      },
      {
        id: "with-action",
        title: "با دکمه عمل",
        description: "حالت خالی همراه با دکمه فراخوان",
        preview: (
          <Empty className="border">
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <FolderOpen className="size-5" />
              </EmptyMedia>
              <EmptyTitle>هیچ فایلی یافت نشد</EmptyTitle>
              <EmptyDescription>
                هنوز فایلی آپلود نکرده‌اید. اولین فایل خود را بارگذاری کنید.
              </EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
              <Button>
                <Plus className="size-4 me-2" />
                آپلود فایل
              </Button>
            </EmptyContent>
          </Empty>
        ),
        code: `<Empty className="border">
  <EmptyHeader>
    <EmptyMedia variant="icon">
      <FolderOpen className="size-5" />
    </EmptyMedia>
    <EmptyTitle>هیچ فایلی یافت نشد</EmptyTitle>
    <EmptyDescription>
      هنوز فایلی آپلود نکرده‌اید. اولین فایل خود را بارگذاری کنید.
    </EmptyDescription>
  </EmptyHeader>
  <EmptyContent>
    <Button>
      <Plus className="size-4 me-2" />
      آپلود فایل
    </Button>
  </EmptyContent>
</Empty>`,
      },
      {
        id: "search-results",
        title: "نتایج جستجو",
        description: "حالت خالی برای نتایج جستجوی یافت نشده",
        preview: (
          <Empty className="border">
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <Search className="size-5" />
              </EmptyMedia>
              <EmptyTitle>نتیجه‌ای یافت نشد</EmptyTitle>
              <EmptyDescription>
                هیچ نتیجه‌ای برای «کلمه جستجو» پیدا نشد. لطفاً عبارت دیگری را امتحان کنید.
              </EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
              <Button variant="outline">پاک کردن فیلترها</Button>
            </EmptyContent>
          </Empty>
        ),
        code: `<Empty className="border">
  <EmptyHeader>
    <EmptyMedia variant="icon">
      <Search className="size-5" />
    </EmptyMedia>
    <EmptyTitle>نتیجه‌ای یافت نشد</EmptyTitle>
    <EmptyDescription>
      هیچ نتیجه‌ای برای «کلمه جستجو» پیدا نشد. لطفاً عبارت دیگری را امتحان کنید.
    </EmptyDescription>
  </EmptyHeader>
  <EmptyContent>
    <Button variant="outline">پاک کردن فیلترها</Button>
  </EmptyContent>
</Empty>`,
      },
      {
        id: "no-orders",
        title: "سفارشات",
        description: "حالت خالی برای لیست سفارشات",
        preview: (
          <Empty className="border">
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <Package className="size-5" />
              </EmptyMedia>
              <EmptyTitle>سفارشی ثبت نشده</EmptyTitle>
              <EmptyDescription>
                شما هنوز سفارشی ثبت نکرده‌اید. برای ثبت اولین سفارش به فروشگاه مراجعه کنید.
              </EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
              <div className="flex gap-2">
                <Button variant="outline">مشاهده محصولات</Button>
                <Button>شروع خرید</Button>
              </div>
            </EmptyContent>
          </Empty>
        ),
        code: `<Empty className="border">
  <EmptyHeader>
    <EmptyMedia variant="icon">
      <Package className="size-5" />
    </EmptyMedia>
    <EmptyTitle>سفارشی ثبت نشده</EmptyTitle>
    <EmptyDescription>
      شما هنوز سفارشی ثبت نکرده‌اید. برای ثبت اولین سفارش به فروشگاه مراجعه کنید.
    </EmptyDescription>
  </EmptyHeader>
  <EmptyContent>
    <div className="flex gap-2">
      <Button variant="outline">مشاهده محصولات</Button>
      <Button>شروع خرید</Button>
    </div>
  </EmptyContent>
</Empty>`,
      },
    ],
  },
];
