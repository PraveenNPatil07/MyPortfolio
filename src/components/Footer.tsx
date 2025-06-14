
"use client";

import React, { useState, useEffect } from 'react';

export function Footer() {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="w-full border-t border-border py-6 mt-16 text-sm text-center text-muted-foreground">
  <p>
    Designed & Built with 💖 by <span className="font-medium text-foreground">Praveen Patil</span>
  </p>
</footer>
  );
}
