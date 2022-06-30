
import Link from "next/link";
import { MainLayout } from "../../components/layouts/MainLayout";

export default function contactPage() {
  return (
    <MainLayout>
        <h2 className={'title'}>
          Ir a <Link href="/">Home</Link>
        </h2>
        <h2 className={'title'}>
          Ir a <Link href="/about">About</Link>
        </h2>
        <p className={'description'}>
          Get started by editing{' '}
          <code className={'code'}>pages/contact.js</code>
        </p>
    </MainLayout>
  );
}
