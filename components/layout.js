import Footer from "./footer";

export default function Layout(props) {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-1 lg:container px-4 py-6 mx-auto md:px-6 md:py-12">
        {props.children}
      </main>
    </div>
  );
}
