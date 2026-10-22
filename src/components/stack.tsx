'use client';

import { STACK } from '@/utils/stack';

const Stack = () => {
  return (
    <section className="my-8 w-full rounded-3xl border border-white/10 bg-white/[0.02] p-6 text-white shadow-card sm:p-10">
      <h2 className="mb-8 text-2xl font-light tracking-tight">Stack</h2>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {STACK.map((skill) => (
          <div
            key={skill.name}
            className="group flex items-center gap-4 rounded-xl border border-transparent p-3 transition-all duration-300 hover:border-beige-1/30 hover:bg-beige-1/5"
          >
            <div className="rounded-xl border border-white/10 bg-black-700 p-3 text-beige-1 transition-transform duration-300 group-hover:scale-105">
              {skill.icon}
            </div>
            <div>
              <h3 className="text-lg font-normal">{skill.name}</h3>
              <p className="text-sm font-light text-white/50">
                {skill.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export { Stack };
