'use client';

import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function LoginPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 flex flex-col">
      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md space-y-8">
          {/* Logo/Title */}
          <div className="text-center">
            <h1 className="text-4xl font-bold text-slate-800">
              <span className="italic">v</span>Supervisor
            </h1>
            <p className="mt-2 text-slate-500">
              Sovereign Commercial Services
            </p>
          </div>

          {/* Login Card */}
          <Card className="shadow-lg">
            <CardContent className="p-6 space-y-6">
              {/* Email */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">
                  Email
                </label>
                <Input
                  type="email"
                  placeholder="test.user@sovereigncs.com"
                  defaultValue="test.user@sovereigncs.com"
                  className="h-11"
                />
              </div>

              {/* Password */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">
                  Password
                </label>
                <Input
                  type="password"
                  defaultValue="••••••••••"
                  className="h-11"
                />
              </div>

              {/* Remember Me + Enter */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox id="remember" />
                  <label
                    htmlFor="remember"
                    className="text-sm text-slate-600 cursor-pointer"
                  >
                    Remember Me?
                  </label>
                </div>
                <Button
                  className="bg-slate-800 hover:bg-slate-700 px-8"
                >
                  Login
                </Button>
              </div>

              {/* Forgot Password */}
              <div>
                <a
                  href="#"
                  className="text-sm text-[#046bd2] hover:underline"
                >
                  Forgot Your Password?
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Framework Selector */}
          <Card className="shadow-lg border-2 border-[#046bd2]">
            <CardContent className="p-6">
              <h2 className="text-center text-lg font-semibold text-slate-700 mb-4">
                Select UI Framework to Preview
              </h2>
              <div className="grid grid-cols-3 gap-3">
                <Button
                  variant="outline"
                  onClick={() => router.push('/mui')}
                  className="w-full h-16 flex flex-col items-center justify-center border-2 transition-all hover:border-[#1976d2] hover:bg-blue-50"
                >
                  <span className="font-bold text-[#1976d2]">MUI</span>
                  <span className="text-xs text-slate-500">Material UI</span>
                </Button>
                <Button
                  variant="outline"
                  onClick={() => router.push('/ant')}
                  className="w-full h-16 flex flex-col items-center justify-center border-2 transition-all hover:border-[#1677ff] hover:bg-blue-50"
                >
                  <span className="font-bold text-[#1677ff]">Ant</span>
                  <span className="text-xs text-slate-500">Ant Design</span>
                </Button>
                <Button
                  variant="outline"
                  onClick={() => router.push('/shadcn')}
                  className="w-full h-16 flex flex-col items-center justify-center border-2 transition-all hover:border-slate-800 hover:bg-slate-50"
                >
                  <span className="font-bold text-slate-800">shadcn</span>
                  <span className="text-xs text-slate-500">shadcn/ui</span>
                </Button>
              </div>
              <p className="text-center text-xs text-slate-400 mt-4">
                Click a framework to preview
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-4 text-center text-sm text-slate-500">
        © 2026 DAJ Strategic Solutions. All Rights Reserved.
      </footer>
    </div>
  );
}
