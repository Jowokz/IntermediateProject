export const users = [
  {
    id: 'u1',
    name: 'Jo Developer',
    email: 'jo@example.com'
  }
];

export const projects = [
  {
    id: 'p1',
    name: 'React Interview Prep',
    description: 'Practice frontend concepts with real project tasks.',
    ownerId: 'u1'
  },
  {
    id: 'p2',
    name: 'Node API Practice',
    description: 'Build stronger backend fundamentals using Express.',
    ownerId: 'u1'
  }
];

export const tasks = [
  {
    id: 't1',
    projectId: 'p1',
    title: 'Review useEffect patterns',
    description: 'Understand dependency arrays and API loading states.',
    status: 'todo',
    priority: 'high'
  },
  {
    id: 't2',
    projectId: 'p1',
    title: 'Build reusable TaskCard component',
    description: 'Move task display into a standalone component.',
    status: 'in-progress',
    priority: 'medium'
  },
  {
    id: 't3',
    projectId: 'p2',
    title: 'Split routes and controllers',
    description: 'Move route handler logic out of server.js.',
    status: 'done',
    priority: 'high'
  }
];
