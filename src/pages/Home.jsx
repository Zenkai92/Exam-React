import { Link } from 'react-router';
import { Login, Logout } from "../auth/LogInOut";
import { useAuth } from "../auth/AuthProvider";

export default function Home() {
    const { user } = useAuth();
    return (
        <div>
            <Link to = "/Gallery">
                <button>Voir la galerie</button>
            </Link>
            <Link to = "/Contact">
                <button>Nous serons ravis de répondre a vos question</button>
            </Link>
               {user ? (
                <>Bienvenue {user.username}
                <Logout/>
                </>
               ):(
                <Login/>
               )}
        </div>
    );
}