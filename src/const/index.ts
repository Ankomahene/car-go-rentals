import { MantineGradient } from '@mantine/core';

export const xs = '30em';
export const sm = '48em';
export const md = '64em';
export const lg = '74em';
export const xl = '90em';

export const primaryGradient: MantineGradient = { from: 'pink', to: 'yellow' };
export const dividerColor = { light: 'gray.1', dark: 'dark.5' };
export const textColor = { light: 'gray.8', dark: 'gray.1' };
export const borderColor = { light: 'gray.6', dark: 'gray.8' };

export const bookedMessage = 'This Car is currently booked by another client';

export const supabaseUrl = 'https://rhknvgjzxhvjwbfboril.supabase.co';

const now = new Date();
export const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
export const tomorrow = new Date(
  now.getFullYear(),
  now.getMonth(),
  now.getDate() + 1
);
