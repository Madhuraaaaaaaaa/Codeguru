import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Landing() {
	const handleGetStarted = () => {
		window.location.href = "/api/login";
	};

	const handleWatchDemo = () => {
		// Placeholder for demo functionality
		alert("Demo coming soon!");
	};

	return (
		<div className="min-h-screen bg-white text-gray-900 flex flex-col">
			{/* Top navigation */}
			<header className="w-full border-b border-gray-200">
				<div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
					<div className="flex items-center space-x-6">
						<div className="text-blue-600 font-semibold text-lg">Code Guru</div>
						<nav className="hidden md:flex items-center space-x-6 text-sm text-gray-600">
							<Link href="/dashboard" className="hover:text-gray-900">
								Dashboard
							</Link>
							<Link href="/ai-output" className="hover:text-gray-900">
								AI Output
							</Link>
							<Link href="/code-preview" className="hover:text-gray-900">
								Code Preview
							</Link>
							<Link href="/backend-builder" className="hover:text-gray-900">
								Backend Builder
							</Link>
							<Link href="/deploy" className="hover:text-gray-900">
								Deploy
							</Link>
						</nav>
					</div>

					<div className="flex items-center space-x-3">
						<button
							onClick={() => (window.location.href = "/api/login")}
							className="hidden md:inline-block text-sm text-gray-700 hover:text-gray-900"
						>
							Sign In
						</button>
						<Button
							onClick={handleGetStarted}
							className="bg-blue-600 text-white hover:bg-blue-500 px-4 py-2 text-sm font-medium rounded-md"
						>
							Start Building Free
						</Button>
					</div>
				</div>
			</header>

			{/* Hero */}
			<main className="flex-1 flex items-center justify-center px-6 py-16">
				<div className="max-w-4xl w-full text-center">
					<div className="inline-block bg-blue-50 text-blue-700 text-xs font-medium px-3 py-1 rounded-full mb-6">
						AI-Powered Development
					</div>

					<h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
						<span className="block">Build web apps without code —</span>
						<span className="block text-blue-600">powered by AI</span>
					</h1>

					<p className="text-base md:text-lg text-gray-600 mb-10 max-w-3xl mx-auto">
						Create full-stack applications with our intelligent no-code builder. Design visually,
						generate code with AI, and deploy instantly. From prototype to production in minutes.
					</p>

					<div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
						<Button
							onClick={handleGetStarted}
							className="bg-blue-600 text-white hover:bg-blue-500 px-8 py-4 text-lg font-semibold rounded-full shadow-md transform hover:-translate-y-1 transition-all duration-200"
						>
							Start Building Free
						</Button>
						<Button
							onClick={handleWatchDemo}
							variant="outline"
							className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg font-semibold rounded-full shadow-sm transform hover:-translate-y-1 transition-all duration-200"
						>
							Watch Demo
						</Button>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<div className="bg-gray-50 p-6 rounded-xl hover:transform hover:-translate-y-2 transition-transform duration-300">
							<div className="text-4xl mb-4">🎨</div>
							<h3 className="text-xl font-semibold mb-2">Visual Design</h3>
							<p className="text-gray-600">Drag and drop interface to design your app visually</p>
						</div>
						<div className="bg-gray-50 p-6 rounded-xl hover:transform hover:-translate-y-2 transition-transform duration-300">
							<div className="text-4xl mb-4">🤖</div>
							<h3 className="text-xl font-semibold mb-2">AI Code Generation</h3>
							<p className="text-gray-600">AI generates clean, production-ready code automatically</p>
						</div>
						<div className="bg-gray-50 p-6 rounded-xl hover:transform hover:-translate-y-2 transition-transform duration-300">
							<div className="text-4xl mb-4">⚡</div>
							<h3 className="text-xl font-semibold mb-2">Instant Deployment</h3>
							<p className="text-gray-600">Deploy your app with one click to our global CDN</p>
						</div>
					</div>
				</div>
			</main>

			{/* Footer (minimal) */}
			<footer className="w-full border-t border-gray-100">
				<div className="max-w-7xl mx-auto px-6 py-6 text-sm text-gray-500 text-center">
					© {new Date().getFullYear()} Code Guru — Built with AI
				</div>
			</footer>
		</div>
	);
}
