import React from "react";
import logo from "../../logo.svg";


export default function Navbar(){
	return (
		<nav className="navbar">
			<img src="{logo}" alt="Companha de Turismo de Cidades"/>
			 <ul className="nav-links">
			 	<li>
			 		<a href="/" className="nav-link">
			 			Inicio
			 		</a>
			 	</li>

			 	<li>
			 		<a href="/" className="nav-link">
			 			Sobre Nós
			 		</a>
			 	</li>

			 	<li>
			 		<a href="/" className="nav-active">
			 			Cidades
			 		</a>
			 	</li>

			 	
			 </ul>
		</nav>
	)
}