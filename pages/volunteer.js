import Head from 'next/head';
import { Container } from 'semantic-ui-react';
import Form from '../components/volunteer/Form';
import { gApiKey, language, region } from '../config';

const Volunteer = () => {
    const s = `https://maps.googleapis.com/maps/api/js?key=${gApiKey}&language=${language}&region=${region}&libraries=places`;
    return (
        <Container textAlign="center">
            <Head>
                <script src={s} />
            </Head>
            <p>This is the Volunteer page</p>
            <Form />
        </Container>
    );
};

export default Volunteer;
