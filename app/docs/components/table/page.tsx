import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ComponentPreview } from "@/components/docs/component-preview"

const invoices = [
  { invoice: "INV001", status: "پرداخت شده", method: "کارت", amount: "250,000" },
  { invoice: "INV002", status: "در انتظار", method: "کیف پول", amount: "150,000" },
  { invoice: "INV003", status: "پرداخت شده", method: "کارت", amount: "350,000" },
  { invoice: "INV004", status: "پرداخت شده", method: "نقدی", amount: "450,000" },
  { invoice: "INV005", status: "در انتظار", method: "کارت", amount: "550,000" },
]

export default function TablePage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">جدول</h1>
        <p className="text-lg text-muted-foreground">نمایش داده‌ها به صورت جدول ساختاریافته</p>
      </div>

      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-4">مثال پایه</h2>
          <ComponentPreview
            code={`<Table>
  <TableHeader>
    <TableRow>
      <TableHead>شناسه</TableHead>
      <TableHead>وضعیت</TableHead>
      <TableHead>مبلغ</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>INV001</TableCell>
      <TableCell>پرداخت شده</TableCell>
      <TableCell>250,000 تومان</TableCell>
    </TableRow>
  </TableBody>
</Table>`}
          >
            <Table>
              <TableCaption>لیست فاکتورهای اخیر</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>شناسه فاکتور</TableHead>
                  <TableHead>وضعیت</TableHead>
                  <TableHead>روش پرداخت</TableHead>
                  <TableHead className="text-left">مبلغ</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {invoices.map((invoice) => (
                  <TableRow key={invoice.invoice}>
                    <TableCell className="font-medium">{invoice.invoice}</TableCell>
                    <TableCell>{invoice.status}</TableCell>
                    <TableCell>{invoice.method}</TableCell>
                    <TableCell className="text-left">{invoice.amount} تومان</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </ComponentPreview>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">جدول ساده</h2>
          <ComponentPreview
            code={`<Table>
  <TableHeader>
    <TableRow>
      <TableHead>نام</TableHead>
      <TableHead>ایمیل</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>علی احمدی</TableCell>
      <TableCell>ali@example.com</TableCell>
    </TableRow>
  </TableBody>
</Table>`}
          >
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>نام</TableHead>
                  <TableHead>ایمیل</TableHead>
                  <TableHead>نقش</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">علی احمدی</TableCell>
                  <TableCell>ali@example.com</TableCell>
                  <TableCell>مدیر</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">سارا محمدی</TableCell>
                  <TableCell>sara@example.com</TableCell>
                  <TableCell>کاربر</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">محمد رضایی</TableCell>
                  <TableCell>mohammad@example.com</TableCell>
                  <TableCell>کاربر</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </ComponentPreview>
        </div>
      </div>
    </div>
  )
}
