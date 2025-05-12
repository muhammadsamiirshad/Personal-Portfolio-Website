declare module 'tsparticles-slim' {
  import { Engine } from 'tsparticles-engine';
  
  export function loadSlim(engine: Engine): Promise<void>;
}
