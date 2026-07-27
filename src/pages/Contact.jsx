export default function Contact() {
  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-md mx-auto px-6">
        <h1 className="text-3xl font-bold text-slate-900 mb-2 text-center">Contact Me</h1>
        <p className="text-slate-600 text-sm text-center mb-8">Send me a message for collaborations or inquiries.</p>

        <form onSubmit={(e) => e.preventDefault()} className="bg-white p-8 rounded-xl border border-slate-200 shadow-xs space-y-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">Name</label>
            <input type="text" placeholder="Your Name" className="w-full px-4 py-2 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900" />
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">Email</label>
            <input type="email" placeholder="your@email.com" className="w-full px-4 py-2 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900" />
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">Message</label>
            <textarea rows="4" placeholder="Your message..." className="w-full px-4 py-2 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900 resize-none"></textarea>
          </div>
          <button type="submit" className="w-full py-3 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-colors">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}