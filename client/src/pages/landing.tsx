import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useState, useEffect } from "react";

export default function Landing() {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		setIsVisible(true);
	}, []);

	const handleGetStarted = () => {
		window.location.href = "/api/login";
	};

	const handleWatchDemo = () => {
		// Placeholder for demo functionality
		alert("Demo coming soon!");
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
			{/* Animated background elements */}
			<div className="absolute inset-0 overflow-hidden">
				<div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
				<div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
				<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-4000"></div>
			</div>

			{/* Header */}
			<header className={`relative z-10 w-full transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
				<div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
					<div className="flex items-center space-x-3">
						<div className="w-10 h-10 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-xl flex items-center justify-center shadow-lg">
							<span className="text-white text-xl">🤖</span>
						</div>
						<span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
							CodingGuru
						</span>
					</div>

					<nav className="hidden lg:flex items-center space-x-8">
						<Link href="/dashboard" className="text-gray-300 hover:text-white transition-colors duration-200 font-medium">
							Dashboard
						</Link>
						<Link href="/ai-output" className="text-gray-300 hover:text-white transition-colors duration-200 font-medium">
							AI Output
						</Link>
						<Link href="/code-preview" className="text-gray-300 hover:text-white transition-colors duration-200 font-medium">
							Code Preview
						</Link>
						<Link href="/backend-builder" className="text-gray-300 hover:text-white transition-colors duration-200 font-medium">
							Backend Builder
						</Link>
						<Link href="/deploy" className="text-gray-300 hover:text-white transition-colors duration-200 font-medium">
							Deploy
						</Link>
					</nav>

					<div className="flex items-center space-x-4">
						<button
							onClick={() => (window.location.href = "/api/login")}
							className="hidden md:inline-block text-gray-300 hover:text-white transition-colors duration-200 font-medium"
						>
							Sign In
						</button>
						<Button
							onClick={handleGetStarted}
							className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white hover:from-emerald-600 hover:to-teal-700 px-6 py-2.5 font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
						>
							Start Building Free
						</Button>
					</div>
				</div>
			</header>

			{/* Hero Section */}
			<section className={`relative z-10 px-6 py-20 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
				<div className="max-w-7xl mx-auto">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
						{/* Left Content */}
						<div className="text-center lg:text-left">
							<h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight">
								<span className="block bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
									Build Apps
								</span>
								<span className="block bg-gradient-to-r from-emerald-400 via-teal-300 to-blue-300 bg-clip-text text-transparent">
									Without Code
								</span>
							</h1>

							<p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
								Create full-stack applications with our intelligent no-code builder. Design visually,
								generate code with AI, and deploy instantly.
							</p>

							<div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
								<Button
									onClick={handleGetStarted}
									className="group bg-gradient-to-r from-emerald-500 to-teal-600 text-white hover:from-emerald-600 hover:to-teal-700 px-10 py-5 text-xl font-bold rounded-2xl shadow-2xl hover:shadow-emerald-500/25 transform hover:-translate-y-2 transition-all duration-300"
								>
									<span className="flex items-center">
										Start Building Free
										<svg className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
										</svg>
									</span>
								</Button>
								<Button
									onClick={handleWatchDemo}
									variant="outline"
									className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-10 py-5 text-xl font-bold rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
								>
									<span className="flex items-center">
										<svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.586a1 1 0 01.707.293l.707.707A1 1 0 0012.414 11H15m-3-3h3m-3 3v3m0-3H9m3 3H9" />
										</svg>
										Watch Demo
									</span>
								</Button>
							</div>
						</div>

						{/* Right Content - App Preview */}
						<div className={`relative transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
							<div className="relative">
								{/* Mock App Interface */}
								<div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20">
									<div className="bg-white/20 rounded-2xl p-6 mb-6">
										<div className="flex items-center justify-between mb-4">
											<div className="flex space-x-2">
												<div className="w-3 h-3 bg-red-400 rounded-full"></div>
												<div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
												<div className="w-3 h-3 bg-green-400 rounded-full"></div>
											</div>
											<div className="text-white/60 text-sm">My Awesome App</div>
										</div>
										<div className="space-y-4">
											<div className="bg-white/10 rounded-xl p-4">
												<div className="h-4 bg-white/20 rounded mb-2"></div>
												<div className="h-3 bg-white/10 rounded w-3/4"></div>
											</div>
											<div className="bg-white/10 rounded-xl p-4">
												<div className="h-4 bg-white/20 rounded mb-2"></div>
												<div className="h-3 bg-white/10 rounded w-1/2"></div>
											</div>
											<div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl p-4 text-center">
												<div className="text-white font-semibold">Get Started</div>
											</div>
										</div>
									</div>
								</div>
								{/* Floating Elements */}
								<div className="absolute -top-4 -right-4 w-20 h-20 bg-emerald-400 rounded-full opacity-60 animate-bounce"></div>
								<div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-400 rounded-full opacity-60 animate-bounce animation-delay-1000"></div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section className={`relative z-10 px-6 py-20 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
				<div className="max-w-7xl mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
							Powerful Features
						</h2>
						<p className="text-xl text-gray-300 max-w-3xl mx-auto">
							Everything you need to build amazing applications without writing a single line of code
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<div className="group bg-white/10 backdrop-blur-lg p-8 rounded-3xl hover:bg-white/15 shadow-xl hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-500 border border-white/20">
							<div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
								<span className="text-2xl">🎨</span>
							</div>
							<h3 className="text-2xl font-bold mb-4 text-white">Visual Design</h3>
							<p className="text-gray-300 text-lg leading-relaxed">Drag and drop interface to design your app visually with our intuitive builder</p>
						</div>
						<div className="group bg-white/10 backdrop-blur-lg p-8 rounded-3xl hover:bg-white/15 shadow-xl hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-500 border border-white/20">
							<div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
								<span className="text-2xl">🤖</span>
							</div>
							<h3 className="text-2xl font-bold mb-4 text-white">AI Code Generation</h3>
							<p className="text-gray-300 text-lg leading-relaxed">AI generates clean, production-ready code automatically with best practices</p>
						</div>
						<div className="group bg-white/10 backdrop-blur-lg p-8 rounded-3xl hover:bg-white/15 shadow-xl hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-500 border border-white/20">
							<div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
								<span className="text-2xl">⚡</span>
							</div>
							<h3 className="text-2xl font-bold mb-4 text-white">Instant Deployment</h3>
							<p className="text-gray-300 text-lg leading-relaxed">Deploy your app with one click to our global CDN with automatic scaling</p>
						</div>
					</div>
				</div>
			</section>

			{/* Steps Section */}
			<section className={`relative z-10 px-6 py-20 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
				<div className="max-w-7xl mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
							How It Works
						</h2>
						<p className="text-xl text-gray-300 max-w-3xl mx-auto">
							Get from idea to live application in just three simple steps
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<div className="text-center group">
							<div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
								1
							</div>
							<h3 className="text-2xl font-bold mb-4 text-white">Design</h3>
							<p className="text-gray-300 text-lg">Use our visual builder to create your app's interface and define its functionality</p>
						</div>
						<div className="text-center group">
							<div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
								2
							</div>
							<h3 className="text-2xl font-bold mb-4 text-white">Generate</h3>
							<p className="text-gray-300 text-lg">Our AI analyzes your design and generates production-ready code automatically</p>
						</div>
						<div className="text-center group">
							<div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
								3
							</div>
							<h3 className="text-2xl font-bold mb-4 text-white">Deploy</h3>
							<p className="text-gray-300 text-lg">Launch your app instantly with our one-click deployment to the cloud</p>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className={`relative z-10 px-6 py-20 transition-all duration-1000 delay-1100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
				<div className="max-w-4xl mx-auto text-center">
					<div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 rounded-3xl p-12 shadow-2xl">
						<h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
							Ready to Build Something Amazing?
						</h2>
						<p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
							Join thousands of creators who are building the future with CodingGuru
						</p>
						<Button
							onClick={handleGetStarted}
							className="bg-white text-purple-900 hover:bg-gray-100 px-12 py-4 text-xl font-bold rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
						>
							Start Building Free
						</Button>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className={`relative z-10 w-full border-t border-white/10 backdrop-blur-sm transition-all duration-700 delay-1300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
				<div className="max-w-7xl mx-auto px-6 py-12">
					<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
						<div>
							<div className="flex items-center space-x-2 mb-4">
								<div className="w-8 h-8 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-lg flex items-center justify-center">
									<span className="text-white text-sm">🤖</span>
								</div>
								<span className="text-white font-bold text-lg">CodingGuru</span>
							</div>
							<p className="text-gray-400 text-sm">
								Building the future of no-code development with AI-powered tools.
							</p>
						</div>
						<div>
							<h4 className="text-white font-semibold mb-4">Product</h4>
							<ul className="space-y-2 text-gray-400 text-sm">
								<li><a href="#" className="hover:text-white transition-colors">Features</a></li>
								<li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
								<li><a href="#" className="hover:text-white transition-colors">Templates</a></li>
							</ul>
						</div>
						<div>
							<h4 className="text-white font-semibold mb-4">Company</h4>
							<ul className="space-y-2 text-gray-400 text-sm">
								<li><a href="#" className="hover:text-white transition-colors">About</a></li>
								<li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
								<li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
							</ul>
						</div>
						<div>
							<h4 className="text-white font-semibold mb-4">Support</h4>
							<ul className="space-y-2 text-gray-400 text-sm">
								<li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
								<li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
								<li><a href="#" className="hover:text-white transition-colors">Status</a></li>
							</ul>
						</div>
					</div>
					<div className="border-t border-white/10 pt-8 text-center">
						<p className="text-gray-400 text-sm">
							© {new Date().getFullYear()} CodingGuru. All rights reserved.
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
}
