import { Link } from 'react-router';
import { Login, Logout } from "../auth/LogInOut";
import { useAuth } from "../auth/AuthProvider";
import './Home.scss';
export default function Home() {
    const { user } = useAuth();
    return (
        <div>
            {user ? (
                <>Bienvenue {user.username}
                <Logout/>
                </>
               ):(
                <Login/>
               )}
            <Link to = "/Encyclopedia">
                <button>Voir l encyclopédie</button>
            </Link>
            <Link to = "/Contact">
                <button>Nous serons ravis de répondre a vos question</button>
            </Link>
               
        </div>
    );
}