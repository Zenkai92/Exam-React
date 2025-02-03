import { useLocation, useNavigate } from "react-router";
import "./header.scss";

export default function Header() {
    const location = useLocation();
    const navigate = useNavigate();

    const pageName = location.pathname.split("/").pop();
    const displayName = pageName ? pageName : "Accueil";

    const handleGoBack = () => {
        navigate(-1);
    }
    return (
        <div className="header">
            <div className="header__left">
                {displayName !== "Accueil" && (
                    <a onClick={handleGoBack}>
                        <img className="header__arrowToLeft" src="./Fleche.png" alt="Retour" />
                    </a>
                )}
                <div className="header__text">
                    <h1 className="header__title">Justice Gallery {displayName}</h1>
                    <p>Bienvenue sur plus grande galerie de-super héros</p>
                </div>
            </div>
            <a href="/">
            <img className="header__logo" src="LogoJL.png" alt="Logo Justice League" />
            </a>
        </div>
    );
}