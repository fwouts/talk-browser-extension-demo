declare module "nicejob" {
  const nicejob: Nicejob;
  export default nicejob;

  interface Nicejob {
    (): string;
    not(): string;
  }
}
