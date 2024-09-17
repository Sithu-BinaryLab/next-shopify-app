export const useRouter = jest.fn().mockReturnValue({
  pathname: "/",
  query: {},
  push: jest.fn(),
  replace: jest.fn(),
  reload: jest.fn(),
  back: jest.fn(),
  prefetch: jest.fn(),
});

export const useSearchParams = jest.fn().mockReturnValue(new URLSearchParams());
