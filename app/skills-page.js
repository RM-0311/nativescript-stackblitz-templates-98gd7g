export function goToHome(args) {
  const button = args.object;
  const page = button.page;
  page.frame.goBack();
}
