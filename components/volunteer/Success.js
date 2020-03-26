import Link from 'next/link';
import { Button } from 'semantic-ui-react';

const Success = props => {
    const { result } = props;
    console.log(result);
    return (
        <div>
            <h1 className="ui centered">Details Successfully Saved {result.status}</h1>
            <Link href="/">
                <Button>
                    <a>Home</a>
                </Button>
            </Link>
        </div>
    );
};

export default Success;
