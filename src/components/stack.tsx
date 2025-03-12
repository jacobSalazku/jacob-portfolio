'use client';

import { STACK } from '@/utils/stack';

const Stack = () => {
  return (
    <section className="bg-black-400 my-8 w-full rounded-2xl border border-beige-1 border-opacity-50 p-6 text-white shadow-lg sm:p-12">
      <h2 className="mb-6 text-2xl font-semibold">Stack</h2>
      <div className="grid grid-cols-1 gap-4 transition-all duration-100 ease-in-out sm:grid-cols-2">
        {STACK.map((skill) => (
          <div key={skill.name} className="flex items-center space-x-2">
            <div className="rounded-lg bg-black p-3 text-2xl">{skill.icon}</div>
            <div>
              <h3 className="text-lg font-medium">{skill.name}</h3>
              <p className="text-sm text-gray-400">{skill.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export { Stack };
