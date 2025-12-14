import { ReactNode } from 'react';
import Header from './Header';
// import Footer from './Footer';

interface LayoutProps {
    children: ReactNode
}

export default function Layout({children}: LayoutProps) {
    return (
        <div className='layout'>
            <Header />
            <main className='layout_main'>
                {children}

            </main>
            
        </div>
    )
}