import React from 'react';
import { ArrowLeft, ArrowRight, Eye, EyeOff, LockKeyhole, Mail, RefreshCw, ShieldAlert } from 'lucide-react';
import { PortalRole } from '../types';

interface SignInProps {
  role: PortalRole;
  onBack: () => void;
}

const roleDetails: Record<PortalRole, { title: string; description: string }> = {
  protocol: {
    title: 'Protocol Officer Portal',
    description: 'Upload and manage approved gallery and news content.',
  },
  'it-admin': {
    title: 'IT Admin Portal',
    description: 'Manage hospital administration, users, and website content.',
  },
};

function createCaptcha() {
  return {
    first: Math.floor(Math.random() * 9) + 1,
    second: Math.floor(Math.random() * 9) + 1,
  };
}

export default function SignIn({ role, onBack }: SignInProps) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [captchaAnswer, setCaptchaAnswer] = React.useState('');
  const [captcha, setCaptcha] = React.useState(createCaptcha);
  const [showPassword, setShowPassword] = React.useState(false);
  const [rememberMe, setRememberMe] = React.useState(false);
  const [alertMessage, setAlertMessage] = React.useState('');
  const details = roleDetails[role];

  const refreshCaptcha = (clearAlert = true) => {
    setCaptcha(createCaptcha());
    setCaptchaAnswer('');
    if (clearAlert) setAlertMessage('');
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const answer = Number(captchaAnswer);

    if (!Number.isInteger(answer) || answer !== captcha.first + captcha.second) {
      setAlertMessage(`Incorrect verification answer. Please solve ${captcha.first} + ${captcha.second}.`);
      refreshCaptcha(false);
      return;
    }

    setAlertMessage('Authentication successful. Your portal dashboard will open shortly.');
  };

  return (
    <section className="relative flex min-h-0 flex-1 items-center justify-center overflow-hidden bg-slate-950 px-3 py-3 text-slate-100 sm:px-6 sm:py-4">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/10 blur-3xl sm:h-[500px] sm:w-[500px]" />
      <div className="pointer-events-none absolute left-1/3 top-1/4 h-48 w-48 rounded-full bg-teal-500/10 blur-3xl sm:h-80 sm:w-80" />

      <div className="relative z-10 mx-auto w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900/90 p-4 shadow-2xl shadow-slate-950/80 backdrop-blur-2xl sm:p-5">
        <button type="button" onClick={onBack} className="mb-3 inline-flex items-center gap-2 text-xs font-semibold text-slate-400 transition-colors hover:text-emerald-300">
          <ArrowLeft className="h-4 w-4" />
          Back to website
        </button>

        <div className="mb-4 text-center sm:mb-5">
          <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-2xl border border-emerald-500/30 bg-linear-to-tr from-emerald-500/20 to-teal-500/10 text-emerald-400 shadow-inner sm:mb-3 sm:h-12 sm:w-12">
            <LockKeyhole className="h-5 w-5 sm:h-6 sm:w-6" />
          </div>
          <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-400">{details.title}</p>
          <h1 className="text-lg font-extrabold tracking-tight text-white sm:text-xl">Portal Authentication</h1>
          <p className="mt-1 text-xs text-slate-400">{details.description}</p>
        </div>

        {alertMessage && (
          <div className={`mb-3 flex items-center gap-2 rounded-xl border p-2.5 text-xs font-medium ${alertMessage.startsWith('Authentication') ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300' : 'border-red-500/30 bg-red-500/10 text-red-400'}`} role="alert">
            <ShieldAlert className="h-4 w-4 shrink-0" />
            <span>{alertMessage}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
          <label className="block">
            <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-300">Email Address</span>
            <span className="relative block">
              <Mail className="absolute left-3.5 top-3 h-4 w-4 text-slate-500" />
              <input type="email" required value={email} onChange={(event) => setEmail(event.target.value)} placeholder="staff.name@fmc.gov.ng" className="w-full rounded-xl border border-slate-800 bg-slate-950/80 px-3.5 py-2 pl-10 text-xs text-white outline-none transition-all placeholder:text-slate-500 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 sm:py-2.5 sm:text-sm" />
            </span>
          </label>

          <label className="block">
            <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-300">Password</span>
            <span className="relative block">
              <LockKeyhole className="absolute left-3.5 top-3 h-4 w-4 text-slate-500" />
              <input type={showPassword ? 'text' : 'password'} required value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Enter your password" className="w-full rounded-xl border border-slate-800 bg-slate-950/80 px-3.5 py-2 pl-10 pr-10 text-xs text-white outline-none transition-all placeholder:text-slate-500 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 sm:py-2.5 sm:text-sm" />
              <button type="button" onClick={() => setShowPassword((visible) => !visible)} aria-label={showPassword ? 'Hide password' : 'Show password'} className="absolute right-3 top-2.5 p-1 text-slate-500 transition-colors hover:text-slate-300 sm:top-3">
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </span>
          </label>

          <label className="flex cursor-pointer select-none items-center gap-2 py-0.5 text-xs text-slate-300">
            <input type="checkbox" checked={rememberMe} onChange={(event) => setRememberMe(event.target.checked)} className="h-3.5 w-3.5 rounded border-slate-700 bg-slate-950 text-emerald-500 focus:ring-emerald-500 focus:ring-offset-slate-900" />
            <span>Remember Me</span>
          </label>

          <div>
            <label htmlFor="captcha-answer" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-300">Security Verification</label>
            <div className="flex w-full items-center justify-between gap-2 rounded-xl border border-slate-800 bg-slate-950/90 p-2 sm:p-2.5">
              <div className="flex min-w-0 shrink-0 items-center gap-1.5 rounded-lg border border-emerald-500/20 bg-emerald-500/10 px-2 py-1.5 sm:gap-2 sm:px-3 sm:py-2">
                <span className="hidden text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-400 sm:inline-block">Solve:</span>
                <span className="whitespace-nowrap text-xs font-extrabold tracking-wider text-emerald-300 sm:text-sm">{captcha.first} + {captcha.second} =</span>
              </div>
              <input id="captcha-answer" type="number" required value={captchaAnswer} onChange={(event) => setCaptchaAnswer(event.target.value)} placeholder="Answer" className="min-w-0 flex-1 rounded-lg border border-slate-700 bg-slate-900 px-2.5 py-1.5 text-center text-xs text-white outline-none placeholder:text-slate-500 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 sm:text-sm" />
              <button type="button" onClick={() => refreshCaptcha()} title="Get new math question" aria-label="Refresh math captcha" className="shrink-0 rounded-lg border border-slate-800 bg-slate-900 p-2 text-slate-400 transition-colors hover:bg-slate-800 hover:text-emerald-400">
                <RefreshCw className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2.5 pt-1 sm:gap-3">
            <button type="submit" className="flex w-full items-center justify-center gap-1.5 rounded-xl bg-emerald-600 py-2 text-xs font-bold text-slate-950 shadow-lg shadow-emerald-600/20 transition-all hover:bg-emerald-500 active:scale-[0.98] sm:py-2.5 sm:text-sm">
              <span>Login</span>
              <ArrowRight className="h-4 w-4" />
            </button>
            <button type="button" onClick={() => setAlertMessage('Please contact the ICT Unit or Administration block to reset your password.')} className="w-full rounded-xl border border-amber-500/30 bg-amber-500/10 py-2 text-xs font-semibold text-amber-400 transition-all hover:border-amber-500/50 hover:bg-amber-500/20 sm:py-2.5 sm:text-sm">
              Forgot Password?
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
