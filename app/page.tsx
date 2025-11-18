import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section with Courses */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
        {/* Animated background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(76,29,149,0.3),rgba(0,0,0,0))]"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Title */}
          <div className="text-center mb-20">
            <div className="inline-block mb-6 px-4 py-2 bg-purple-500/20 backdrop-blur-sm rounded-full border border-purple-500/30">
              <span className="text-purple-300 text-sm font-medium">✨ Transform Your Future</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-purple-400">
              Unlock Your
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">Potential</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Master high-income skills with industry experts
            </p>
          </div>

          {/* Course Cards - Main Course + Pricing Plans */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Premium Plan - $499 */}
            <div className="group relative bg-gradient-to-br from-blue-900/50 to-cyan-900/50 backdrop-blur-sm border-2 border-blue-500/40 rounded-2xl overflow-hidden hover:border-blue-400 transition-all duration-300 hover:scale-105 shadow-xl shadow-blue-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
              <div className="relative p-8">
                <div className="mb-4">
                  <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-white text-xs font-bold mb-4">
                    ⚡ POPULAR CHOICE
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-white mb-3">Premium Plan</h3>
                <p className="text-gray-300 mb-6 text-sm">Best value for committed learners</p>

                <div className="mb-8">
                  <div className="flex items-baseline gap-3 mb-3">
                    <span className="text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500">$499</span>
                    <div className="flex flex-col">
                      <span className="text-gray-300 text-base font-semibold">for one month</span>
                      <span className="text-gray-400 text-xs">Renew for $250/mo</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  {['1 Vendor of your choice', '1 call to decide vendor order choice', '2 classes a week', '1 checkup at the end of the week', 'Access to all course materials', 'Community Discord access', 'Email support', 'Certificate upon completion'].map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mt-0.5">
                        <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-200 text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/courses/select?plan=premium"
                  className="block w-full text-center py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-blue-500/50 text-lg"
                >
                  Choose Premium
                </Link>
              </div>
            </div>

            {/* Elite Plan - $700 */}
            <div className="group relative bg-gradient-to-br from-purple-900/60 via-pink-900/50 to-blue-900/60 backdrop-blur-sm border-2 border-purple-500 rounded-2xl overflow-hidden hover:border-pink-400 transition-all duration-300 hover:scale-105 shadow-2xl shadow-purple-500/30">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                <div className="px-5 py-2 bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-500 rounded-full text-white text-sm font-black shadow-xl flex items-center justify-center">
                  BEST VALUE
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/15 via-pink-500/10 to-blue-500/15 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-10 right-10 w-32 h-32 bg-pink-500/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl"></div>
              </div>
              <div className="relative p-8 pt-10">
                <div className="mb-4">
                  <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 rounded-full text-white text-xs font-bold mb-4">
                    💎 ELITE PACKAGE
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-white mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white via-pink-200 to-purple-200">
                  Elite Plan
                </h3>
                <p className="text-gray-200 mb-6 text-sm font-medium">Best value for committed learners</p>

                <div className="mb-8">
                  <div className="flex items-baseline gap-3 mb-3">
                    <span className="text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">$700</span>
                    <div className="flex flex-col">
                      <span className="text-gray-200 text-base font-semibold">for 2 months</span>
                      <span className="text-purple-300 text-xs font-semibold">Renew for $150/mo</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  {['1 Vendor of your choice', '1 call to decide vendor order choice', '2 classes a week', '1 checkup at the end of the week', '1-on-1 mentorship sessions', 'Priority support 24/7', 'Exclusive resources & templates', 'Lifetime course access', 'Job placement assistance'].map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 flex items-center justify-center mt-0.5 shadow-lg shadow-pink-500/50">
                        <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-100 text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/courses/select?plan=elite"
                  className="block w-full text-center py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700 hover:from-purple-500 hover:via-pink-500 hover:to-purple-600 text-white font-black rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-pink-500/60 text-lg relative overflow-hidden group"
                >
                  <span className="relative z-10">Choose Elite</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-400/0 via-pink-400/30 to-pink-400/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </Link>
              </div>
            </div>
          </div>

          {/* Money-back guarantee */}
          <div className="mt-8 text-center text-sm text-gray-400">
            <p>All plans include a 7-day money-back guarantee • Cancel anytime</p>
          </div>
        </div>
      </section>

      {/* Pricing Plans Section Removed - Now in Hero */}
      <section className="hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-6 px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full border border-blue-500/30">
              <span className="text-blue-300 text-sm font-medium">💎 Flexible Pricing</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-400">
              Choose Your Plan
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Select the perfect plan that fits your learning style and budget
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Basic Plan */}
            <div className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border-2 border-blue-500/30 rounded-2xl p-8 hover:border-blue-500/60 transition-all duration-300 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
              <div className="relative">
                <h3 className="text-2xl font-bold text-white mb-2">Basic Plan</h3>
                <p className="text-gray-400 mb-6">Perfect for getting started</p>

                <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">$500</span>
                    <span className="text-gray-400">for 1 month</span>
                  </div>
                  <div className="text-sm text-gray-300">
                    <span className="font-semibold">Renew for $250/month</span>
                    <span className="text-gray-400"> at the end of each month</span>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  {['Access to all course materials', 'Weekly live sessions', 'Community Discord access', 'Email support', 'Certificate upon completion'].map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/courses/select"
                  className="block w-full text-center py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-blue-500/50"
                >
                  Choose Basic Plan
                </Link>
              </div>
            </div>

            {/* Premium Plan */}
            <div className="group relative bg-gradient-to-br from-purple-900/50 to-blue-900/50 backdrop-blur-sm border-2 border-purple-500 rounded-2xl p-8 hover:border-purple-400 transition-all duration-300 hover:scale-105 shadow-xl shadow-purple-500/20">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <div className="px-4 py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white text-xs font-bold">
                  ⭐ RECOMMENDED
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
              <div className="relative">
                <h3 className="text-2xl font-bold text-white mb-2">Premium Plan</h3>
                <p className="text-gray-400 mb-6">Best value for committed learners</p>

                <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">$700</span>
                    <span className="text-gray-400">for 2 months</span>
                  </div>
                  <div className="text-sm text-gray-300">
                    <span className="font-semibold">Renew for $150/month</span>
                    <span className="text-gray-400"> at the end of each month</span>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  {['Everything in Basic Plan', '1-on-1 mentorship sessions', 'Priority support', 'Exclusive resources & templates', 'Lifetime course access', 'Job placement assistance'].map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/courses/select"
                  className="block w-full text-center py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-500 hover:via-pink-500 hover:to-blue-500 text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-purple-500/50"
                >
                  Choose Premium Plan
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center text-sm text-gray-400">
            <p>All plans include a 7-day money-back guarantee</p>
            <p className="mt-2">Cancel anytime, no questions asked</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-gradient-to-br from-slate-900 via-purple-900/30 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-6 px-4 py-2 bg-purple-500/20 backdrop-blur-sm rounded-full border border-purple-500/30">
              <span className="text-purple-300 text-sm font-medium">⭐ What Our Students Say</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-400">
              Real Results, Real People
            </h2>
            <p className="text-gray-400 text-lg">
              Don't just take our word for it
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Testimonial 1 - Enthusiastic */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 hover:border-purple-500/40 transition-all">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold">
                  M
                </div>
                <div className="ml-3">
                  <h4 className="text-white font-bold">Marcus Johnson</h4>
                  <p className="text-gray-400 text-sm">Brooklyn, NY</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              <p className="text-gray-300 leading-relaxed">
                Yo this is LEGIT! 🔥 I was skeptical at first but bro, these vendors are the real deal. Made my money back in like 2 weeks no cap. If you're on the fence just do it fr fr.
              </p>
            </div>

            {/* Testimonial 2 - Professional */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 hover:border-purple-500/40 transition-all">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
                  S
                </div>
                <div className="ml-3">
                  <h4 className="text-white font-bold">Sarah Chen</h4>
                  <p className="text-gray-400 text-sm">Los Angeles, CA</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              <p className="text-gray-300 leading-relaxed">
                Outstanding service and incredible value. The vendor connections alone are worth triple the price. The weekly calls are extremely helpful and the class content is top-tier. Highly recommended for serious entrepreneurs.
              </p>
            </div>

            {/* Testimonial 3 - Casual/Friendly */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 hover:border-purple-500/40 transition-all">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center text-white font-bold">
                  D
                </div>
                <div className="ml-3">
                  <h4 className="text-white font-bold">Danny Rodriguez</h4>
                  <p className="text-gray-400 text-sm">Miami, FL</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(4)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
                <span className="text-gray-600 text-lg">★</span>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Pretty solid course overall. The vendor quality is A1 and the support team actually responds fast which is dope. Only thing is I wish there were more classes per week but for the price it's definitely worth it.
              </p>
            </div>

            {/* Testimonial 4 - Gen Z */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 hover:border-purple-500/40 transition-all">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center text-white font-bold">
                  K
                </div>
                <div className="ml-3">
                  <h4 className="text-white font-bold">Kayla Martinez</h4>
                  <p className="text-gray-400 text-sm">Houston, TX</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              <p className="text-gray-300 leading-relaxed">
                Bestie this changed my life fr 💯 The vendors are bussin and the community is so supportive. Already made enough to pay for the course twice over. If you're thinking about it just pull the trigger bestie you won't regret it!!!
              </p>
            </div>

            {/* Testimonial 5 - Older/Mature */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 hover:border-purple-500/40 transition-all">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white font-bold">
                  R
                </div>
                <div className="ml-3">
                  <h4 className="text-white font-bold">Robert Thompson</h4>
                  <p className="text-gray-400 text-sm">Chicago, IL</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              <p className="text-gray-300 leading-relaxed">
                I've been in business for 30 years and I must say, this program exceeded my expectations. The vendor network is exceptional and the instructors clearly know what they're doing. A wise investment for anyone serious about this industry.
              </p>
            </div>

            {/* Testimonial 6 - Street Smart */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 hover:border-purple-500/40 transition-all">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold">
                  T
                </div>
                <div className="ml-3">
                  <h4 className="text-white font-bold">Tyrone Williams</h4>
                  <p className="text-gray-400 text-sm">Atlanta, GA</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              <p className="text-gray-300 leading-relaxed">
                Real talk, I've seen a lot of courses tryna finesse people but this ain't one of em. The game they teaching is solid and the connects are official. Already flipped my first few pieces and the profit margins crazy. Respect to the team 💪
              </p>
            </div>

            {/* Testimonial 7 - Cautiously Positive */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 hover:border-purple-500/40 transition-all">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-slate-500 to-gray-500 flex items-center justify-center text-white font-bold">
                  J
                </div>
                <div className="ml-3">
                  <h4 className="text-white font-bold">Jessica Park</h4>
                  <p className="text-gray-400 text-sm">Seattle, WA</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(4)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
                <span className="text-gray-600 text-lg">★</span>
              </div>
              <p className="text-gray-300 leading-relaxed">
                I was hesitant at first because there are so many scams out there, but this is legit. The vendors are real and the products are quality. It's not a get-rich-quick scheme though - you still gotta put in work. But if you do, it pays off.
              </p>
            </div>

            {/* Testimonial 8 - Hype/Energy */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 hover:border-purple-500/40 transition-all">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-pink-500 flex items-center justify-center text-white font-bold">
                  C
                </div>
                <div className="ml-3">
                  <h4 className="text-white font-bold">Chris Anderson</h4>
                  <p className="text-gray-400 text-sm">Phoenix, AZ</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              <p className="text-gray-300 leading-relaxed">
                BRO WHERE HAS THIS BEEN ALL MY LIFE?! 🚀 The vendor plugs are INSANE, the classes are fire, and I'm literally making bank right now. If you're sleeping on this you're missing OUT. This is the move fr! LFG!!!
              </p>
            </div>

            {/* Testimonial 9 - Neutral/Mixed */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 hover:border-purple-500/40 transition-all">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white font-bold">
                  A
                </div>
                <div className="ml-3">
                  <h4 className="text-white font-bold">Alex Kim</h4>
                  <p className="text-gray-400 text-sm">San Francisco, CA</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(3)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
                <span className="text-gray-600 text-lg">★★</span>
              </div>
              <p className="text-gray-300 leading-relaxed">
                It's decent. The vendor connections are good but I expected more hands-on guidance. The classes cover the basics well but could go deeper. Not bad for the price, just not mind-blowing. Worth trying if you're starting out.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400 text-sm">
              Join <span className="text-purple-400 font-bold">500+</span> successful students already enrolled
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-400">
              Why Choose CourseLab?
            </h2>
            <p className="text-gray-400 text-lg">
              Everything you need to succeed in your learning journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Expert Instructors</h3>
                <p className="text-gray-400 leading-relaxed">
                  Learn from industry professionals with years of real-world experience
                </p>
              </div>
            </div>

            <div className="group relative bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Flexible Learning
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Study at your own pace with lifetime access to all course materials
                </p>
              </div>
            </div>

            <div className="group relative bg-slate-800/50 backdrop-blur-sm border border-pink-500/20 rounded-2xl p-8 hover:border-pink-500/50 transition-all duration-300 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Community Support</h3>
                <p className="text-gray-400 leading-relaxed">
                  Connect with fellow learners and get support whenever you need it
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
