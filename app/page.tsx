import RichTextEditor from "@/components/tip-tap/rich-text-editor"

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white
      [&_.tiptap]:focus:ring-0 [&_.tiptap]:focus:outline-none">
      <RichTextEditor />
    </div>
  );
}