const Footer = () => {
    return (
        <footer className="px-4 py-8 bg-blue text-white mt-4">
	<div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
		<div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
			<div className="flex items-center justify-center flex-shrink-0 rounded-full bg-white p-4 dark:bg-violet-400">
				<div><img className="w-16" src="https://i.ibb.co/K9DgPkb/logo-image-removebg-preview.png" alt="" /></div>
			</div>
			<ul className="flex flex-wrap items-center space-x-4 sm:space-x-8">
				<li>
					<a rel="noopener noreferrer" href="#">Terms of Use</a>
				</li>
				<li>
					<a rel="noopener noreferrer" href="#">Privacy</a>
				</li>
			</ul>
		</div>
		<ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-8">
			<li>
				<a rel="noopener noreferrer" href="#">Instagram</a>
			</li>
			<li>
				<a rel="noopener noreferrer" href="https://web.facebook.com/mind.hack.376"  target="_blank" >Facebook</a>
			</li>
			<li>
				<a rel="noopener noreferrer" href="https://twitter.com/ahmedraza_069" target="_blank">Twitter</a>
			</li>
		</ul>
	</div>
</footer>
    );
};

export default Footer;