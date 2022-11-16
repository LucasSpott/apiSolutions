import { useState, useEffect } from "react";
import React from "react";
import { Link  } from "react-router-dom";
import "./CSS/Header.css";
import { CSSTransition } from "react-transition-group";
//gracas a deus


export default function Header(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    
    const showNavBar = () => {
        setIsMenuOpen(!isMenuOpen);
    };//mobile menu
    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 768px)");
        mediaQuery.addEventListener("change", handleMediaQueryChange);
        handleMediaQueryChange(mediaQuery);
        
        return () => {
            mediaQuery.removeEventListener("change", handleMediaQueryChange);
        };
        
    }, []);//mobile nav bar

    const handleMediaQueryChange = (mediaQuery) => {
        if (mediaQuery.matches) {
            setIsSmallScreen(true); 
        } else {
            setIsSmallScreen(false);
        }
        
    };//mobile nav bar
    
    
const [lightMode, setLightMode] = useState(() => {
    const savedMode = JSON.parse(localStorage.getItem("lightMode"));
    return savedMode || false;
});

  React.useEffect(() => {
   
    //TRUE
    if (lightMode === true) {
        document.querySelector("body").classList.add("theme-light");
        document.querySelector("header").classList.add("headereFooter-Theme");
        document.querySelector("footer").classList.add("headereFooter-Theme");
        
        //RESOLVENDO BUGS COM IF/ELSE
    if(document.querySelector(".h1-Home")){
        document.querySelector(".h1-Home").classList.add("theme-light");
    }
    if(document.querySelector(".h3-MainHome")){
        document.querySelector(".h3-MainHome").classList.add("theme-light");
    }
    if(document.querySelectorAll(".txt-Header")){
        document.querySelectorAll(".txt-Header").forEach((item) => {
         item.classList.add("txtTheme-light");
    });
    }
    if(document.querySelector(".h2-bottomHome")){
        document.querySelector(".h2-bottomHome").classList.add("buttonHomeTheme");
    }

    if(document.querySelectorAll(".box1")){
         document.querySelectorAll(".box1").forEach((item) => {
             item.classList.add("box1Theme");
    });
    }
    if(document.querySelectorAll(".txt-mainBox")){
        document.querySelectorAll(".txt-mainBox").forEach((item) => {
            item.classList.add("txtBoxTheme");
    });
    }
    if(document.querySelectorAll(".linkFooter")){
        document.querySelectorAll(".linkFooter").forEach((item) => {
            item.classList.add("txt-linkfooter");
    });
        if(document.querySelectorAll(".h1-Footer")){
            document.querySelectorAll(".h1-Footer").forEach((item) => {
            item.classList.add("txt-linkfooter");
        });
    }
    if(document.querySelector(".h3-bottomHome")){
        document.querySelector(".h3-bottomHome").classList.add("txt-linkfooter");
    }
    if(document.querySelector(".h1-Contato")){
        document.querySelector(".h1-Contato").classList.add("txt-linkfooter");
    }
    if(document.querySelectorAll(".h3-Contato")){
        document.querySelectorAll(".h3-Contato").forEach((item) => {
            item.classList.add("txt-linkfooter");
        });
    }
    if(document.querySelector(".h33-Contato")){
        document.querySelector(".h33-Contato").classList.add("h33-ContatoTheme");
    }
    if(document.querySelectorAll(".p-ParceiroBrasil")){
        document.querySelectorAll(".p-ParceiroBrasil").forEach((item) => {
          item.classList.add("txt-linkfooter");  
    });
}
    if(document.querySelector(".h1-ParceiroBrasil")){
        document.querySelector(".h1-ParceiroBrasil").classList.add("txt-linkfooter");
    }
    if(document.querySelector(".h1-ParceiroAlemanha")){
        document.querySelector(".h1-ParceiroAlemanha").classList.add("txt-linkfooter");
    }
    if(document.querySelector(".h1-Parceria")){
        document.querySelector(".h1-Parceria").classList.add("h1-ParceriaTheme");
    }
    if(document.querySelector(".h1-ParceiroEUA")){
        document.querySelector(".h1-ParceiroEUA").classList.add("txt-linkfooter");
    }
    if(document.querySelector(".h1-ParceiroUK")){
        document.querySelector(".h1-ParceiroUK").classList.add("txt-linkfooter");
    }
    if(document.querySelectorAll(".h1-SobreBox")){
        document.querySelectorAll(".h1-SobreBox").forEach((item) => {
          item.classList.add("txt-linkfooter");  
    });
}
    if(document.querySelectorAll(".p-SobreBox")){
    document.querySelectorAll(".p-SobreBox").forEach((item) => {
      item.classList.add("txt-linkfooter");  
    });
}
if(document.querySelectorAll("li")){
    document.querySelectorAll("li").forEach((item) => {
      item.classList.add("txt-linkfooter");  
    });
}
    if(document.querySelector(".h1-Sobre")){
        document.querySelector(".h1-Sobre").classList.add("txt-linkfooter");
    }
    if(document.querySelector(".h2-Sobre")){
        document.querySelector(".h2-Sobre").classList.add("txt-linkfooter");
    }
    if(document.querySelectorAll(".p-Termos")){
        document.querySelectorAll(".p-Termos").forEach((item) => {
          item.classList.add("txt-linkfooter");  
        });
    }
    if(document.querySelectorAll(".p-Privacidade")){
        document.querySelectorAll(".p-Privacidade").forEach((item) => {
          item.classList.add("txt-linkfooter");  
        });
    }
    if(document.querySelectorAll(".h1-Privacidade")){
        document.querySelectorAll(".h1-Privacidade").forEach((item) => {
          item.classList.add("txt-linkfooter");  
        });
    }

}   

    //FIM DO TRUE


    // FALSO
    } else if(lightMode === false) {
      document.querySelector("body").classList.remove("theme-light");
        document.querySelector("header").classList.remove("headereFooter-Theme");
        document.querySelector("footer").classList.remove("headereFooter-Theme");

        //RESOLVENDO BUGS COM IF/ELSE
        if(document.querySelector(".h1-Home")){
            document.querySelector(".h1-Home").classList.remove("theme-light");
        }
        if(document.querySelector(".h3-MainHome")){
            document.querySelector(".h3-MainHome").classList.remove("theme-light");
        }
        if(document.querySelectorAll(".txt-Header")){
            document.querySelectorAll(".txt-Header").forEach((item) => {
                item.classList.remove("txtTheme-light");
            });
        if(document.querySelector(".h2-bottomHome")){
                document.querySelector(".h2-bottomHome").classList.remove("buttonHomeTheme");
            }
        if(document.querySelectorAll(".box1")){
                document.querySelectorAll(".box1").forEach((item) => {
                    item.classList.remove("box1Theme");
        });
        }
        if(document.querySelectorAll(".txt-mainBox")){
            document.querySelectorAll(".txt-mainBox").forEach((item) => {
                item.classList.remove("txtBoxTheme");
        });

        }
        if(document.querySelectorAll(".linkFooter")){
            document.querySelectorAll(".linkFooter").forEach((item) => {
                item.classList.remove("txt-linkfooter");
        });
        }
        if(document.querySelectorAll(".h1-Footer")){
        document.querySelectorAll(".h1-Footer").forEach((item) => {
        item.classList.remove("txt-linkfooter");
        });
        }
        if(document.querySelector(".h3-bottomHome")){
            document.querySelector(".h3-bottomHome").classList.remove("txt-linkfooter");
        }
        if(document.querySelector(".h1-Contato")){
            document.querySelector(".h1-Contato").classList.remove("txt-linkfooter");
        }
        if(document.querySelectorAll(".h3-Contato")){
            document.querySelectorAll(".h3-Contato").forEach((item) => {
                item.classList.remove("txt-linkfooter");
            });
        }
        
        if(document.querySelector(".h33-Contato")){
            document.querySelector(".h33-Contato").classList.remove("h33-ContatoTheme");
        }
        if(document.querySelector(".h1-Parceria")){
            document.querySelector(".h1-Parceria").classList.remove("txt-linkfooter");
        }
        if(document.querySelector(".h1-ParceiroBrasil")){
            document.querySelector(".h1-ParceiroBrasil").classList.remove("txt-linkfooter");
        }
        if(document.querySelectorAll(".p-ParceiroBrasil")){
            document.querySelectorAll(".p-ParceiroBrasil").forEach((item) => {
              item.classList.remove("txt-linkfooter");  
        });
        }
        if(document.querySelector(".h1-ParceiroAlemanha")){
            document.querySelector(".h1-ParceiroAlemanha").classList.remove("txt-linkfooter");
        }
        if(document.querySelector(".h1-Parceria")){
            document.querySelector(".h1-Parceria").classList.remove("h1-ParceriaTheme");
        }
        if(document.querySelector(".h1-ParceiroEUA")){
            document.querySelector(".h1-ParceiroEUA").classList.remove("txt-linkfooter");
        }
        if(document.querySelector(".h1-ParceiroUK")){
            document.querySelector(".h1-ParceiroUK").classList.remove("txt-linkfooter");
        }
        if(document.querySelectorAll(".h1-SobreBox")){
            document.querySelectorAll(".h1-SobreBox").forEach((item) => {
              item.classList.remove("txt-linkfooter");  
        });
        }
        if(document.querySelectorAll(".p-SobreBox")){
        document.querySelectorAll(".p-SobreBox").forEach((item) => {
          item.classList.remove("txt-linkfooter");  
        });
        }
        if(document.querySelectorAll("li")){
        document.querySelectorAll("li").forEach((item) => {
          item.classList.remove("txt-linkfooter");  
        });
        }
        if(document.querySelector(".h1-Sobre")){
            document.querySelector(".h1-Sobre").classList.remove("txt-linkfooter");
        }
        if(document.querySelector(".h2-Sobre")){
            document.querySelector(".h2-Sobre").classList.remove("txt-linkfooter");
        }
        if(document.querySelectorAll(".p-Termos")){
            document.querySelectorAll(".p-Termos").forEach((item) => {
              item.classList.remove("txt-linkfooter");  
            });
        }
        if(document.querySelectorAll(".h1-Privacidade")){
            document.querySelectorAll(".h1-Privacidade").forEach((item) => {
              item.classList.remove("txt-linkfooter");  
            });
        }
        if(document.querySelectorAll(".p-Privacidade")){
            document.querySelectorAll(".p-Privacidade").forEach((item) => {
              item.classList.remove("txt-linkfooter");  
            });
        }
        
        
    }
}
    const json = lightMode;
    localStorage.setItem("lightMode", json)
  }, [lightMode]);
    
  const wppHeader = () => {
    window.open("https://api.whatsapp.com/send?phone=5519999999999&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20seus%20servi%C3%A7os%20de%20desenvolvimento%20web%20e%20mobile%20%F0%9F%98%8E");
    }

    return (
        <header>
            <Link className="h1-Header" to="/">
                <img className="image-Logo" src="favicon.png" alt="logo" />    
            </Link>
        <nav>
            <Link to="/Projeto" className="txt-Header">Experiência</Link>
            <Link to="/parceiros" className="txt-Header">Parceiros</Link>
            <Link to="/contato" className="txt-Header">Contato</Link>
            <Link to="/sobre" className="txt-Header">Sobre</Link>
            <input onClick={() => setLightMode(!lightMode)} checked={lightMode ? true : false} type="checkbox" id="switch" name="theme" />
            
        </nav>
        <div className="div-Bar">
            <Link onClick={() => showNavBar()}>
                <CSSTransition 
                in={isMenuOpen}
                timeout={350}
                classNames="buttonAnimation"
            >
            <img className="img-Header" src="menuNavIcon.png" alt="Logo"/>
            </CSSTransition>
            </Link>
                {( !isSmallScreen || isMenuOpen) && (
            <CSSTransition 
                in={!isMenuOpen || isSmallScreen}
                timeout={350}
                classNames="menuAnimation"
                unmountOnExit
            >
            <div className="div-NavMenu">
                <nav className={lightMode ? "menuTheme" : "menu"}>
                <Link to="/Projeto" className="menutxt-Header">Experiência</Link>
                <Link to="/parceiros" className="menutxt-Header">Parceiros</Link>
                <Link to="/contato" className="menutxt-Header">Contato</Link>
                <Link to="/sobre" className="menutxt-Header">Sobre</Link>
                <Link onClick={() => wppHeader()} className={lightMode ? "menubuttonTheme" : "menuButton-Header"}>Whatsapp</Link>
                <Link className={lightMode ? "menubuttonTheme" : "menuButton-Header"}>Parceria</Link>
            </nav>
            </div>
            </CSSTransition>
                )}
           
        </div>
        <div className="divbuttons">
            <Link onClick={() => wppHeader()} className="button-Header">Whatsapp</Link>
        </div>
        </header>
    );
    }