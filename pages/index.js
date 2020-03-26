import Link from 'next/link';
import { Button } from 'semantic-ui-react';

const Index = () => (
    <div>
        <p>Hello Next.js, this is your friend Faris from ProjectHelp</p>
        <Link href="/volunteer">
            <Button>
                <a>Volunteer</a>
            </Button>
        </Link>
        <Link href="/help">
            <Button>
                <a>Help</a>
            </Button>
        </Link>
    </div>
);

export default Index;
