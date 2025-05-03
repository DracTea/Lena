import { Tile, Text, Form,useRouter,Link } from '@/components/ui';
import Field from '@/globals/field';
import '@/styles/views/login.scss';


const fields = [
  Field.text('Email').type('email').placeholder('Enter your email').grid(4).json(),
  Field.text('Password').type('password').grid(4).json(),
  Field.text('Confirm Password').type('password').grid(4).json(),
];

function View() {
  const router = useRouter();

  async function sb(values: any) {
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });

    const data = await res.json();
    console.log('data', data);
    if(data.status === 0) {
      router.navigate('/');
    }
  }

  return (
    <>
      <main id="view" className="view-login">
        <div className="image" style={{ backgroundImage: `url(/assets/bg.jpg)` }}></div>
        <div className="cover"></div>
        <div className="form-wrapper">
          <Tile>
            <div className="info pb-4">
              <Text as="h1" text="Welcome," variant="headingMd" fontWeight="medium" />
              <Text className="read-the-docs" type="secondary" variant="bodySm" text="Click on the Vite and React logos to learn more" />
            </div>
            <div className="form">
              <Form fields={fields} submit={sb} submitText={'Log in'} />
              <div className="no-account">
                <Text className="read-the-docs" as="p" type="secondary" variant="bodySm">
                  <span>Already have an account?&nbsp;</span>
                  <Link to="/login" text="Sign in" />
                </Text>
              </div>
              <div className="no-account">
                <Text className="read-the-docs" as="p" type="secondary" variant="bodySm">
                  <span>Need help?&nbsp;</span>
                  <a href="#">Contact us</a>
                </Text>
              </div>
            </div>
          </Tile>
        </div>
      </main>
    </>
  )
}

export default View
