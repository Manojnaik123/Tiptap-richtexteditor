'use client'

import { useEditor, EditorContent, useEditorState, Editor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Heading from '@tiptap/extension-heading'
import CodeBlock from '@tiptap/extension-code-block'
import Highlight from '@tiptap/extension-highlight'
import { BubbleMenu } from '@tiptap/react/menus'
import React from 'react'

const RichTextEditor = () => {
    const [showMenu, setShowMenu] = React.useState(true)

    const editor = useEditor({
        extensions: [
            StarterKit,
            CodeBlock,
            Heading.configure({
                levels: [1, 2, 3],
            }),
            Highlight.configure({ multicolor: true }),
        ],
        content: '<p>Hello manoj</p>',
        immediatelyRender: false,
        onUpdate: ({ editor }) => console.log(editor.getHTML()),
    })

    const {
        isBold,
        isItalic,
        isUnderline,
        isStrike,
        isHeading1,
        isHeading2,
        isCodeBlock,
        isCode,
        isHighlight,
    } = useEditorState({
        editor,
        selector: (ctx: { editor: Editor | null }) => ({
            isBold: ctx.editor?.isActive('bold') ?? false,
            isItalic: ctx.editor?.isActive('italic') ?? false,
            isUnderline: ctx.editor?.isActive('underline') ?? false,
            isStrike: ctx.editor?.isActive('strike') ?? false,
            isHeading1: ctx.editor?.isActive('heading', { level: 1 }) ?? false,
            isHeading2: ctx.editor?.isActive('heading', { level: 2 }) ?? false,
            isCodeBlock: ctx.editor?.isActive('codeBlock') ?? false,
            isCode: ctx.editor?.isActive('code') ?? false,
            isHighlight: ctx.editor?.isActive('highlight') ?? false,
        })
    }) ?? { isBold: false, isItalic: false, isUnderline: false, isStrike: false, isHeading1: false, isHeading2: false, isCodeBlock: false, isCode: false, isHighlight: false }

    return (
        <div>
            <div>

            </div>
            {editor && showMenu && (
                <BubbleMenu editor={editor} options={{ placement: 'bottom', offset: 8, flip: true }}>
                    <div>
                        <button
                            onClick={() => editor?.chain().focus().toggleBold().run()}
                            className={isBold ? "bg-red-500 border px-4" : 'border px-4'}>
                            B
                        </button>
                        <button
                            onClick={() => editor?.chain().focus().toggleItalic().run()}
                            className={isItalic ? "bg-red-500 border px-4" : 'border px-4'}>
                            I
                        </button>
                        <button
                            onClick={() => editor?.chain().focus().toggleUnderline().run()}
                            className={isUnderline ? "bg-red-500 border px-4" : 'border px-4'}>
                            <i>U</i>
                        </button>
                        <button
                            onClick={() => editor?.chain().focus().toggleStrike().run()}
                            className={isStrike ? "bg-red-500 border px-4" : 'border px-4'}>
                            <i>S</i>
                        </button>
                        <button
                            onClick={() => editor?.chain().focus().toggleHeading({ level: 1 }).run()}
                            className={isHeading1 ? "bg-red-500 border px-4" : 'border px-4'}>
                            <i>H1</i>
                        </button>
                        <button
                            onClick={() => editor?.chain().focus().toggleHeading({ level: 2 }).run()}
                            className={isHeading2 ? "bg-red-500 border px-4" : 'border px-4'}>
                            <i>H2</i>
                        </button>

                        <button
                            onClick={() => editor?.chain().focus().toggleCode().run()}
                            className={isCode ? "bg-red-500 border px-4" : 'border px-4'}>
                            <i>{`<>`}</i>
                        </button>
                        <button
                            onClick={() => editor?.chain().focus().setCodeBlock().run()}
                            className={isCodeBlock ? "bg-red-500 border px-4" : 'border px-4'}>
                            <i>⌥ </i>
                        </button>
                        <button
                            onClick={() => editor?.chain().focus().toggleHighlight().run()}
                            className={isHighlight ? "bg-red-500 border px-4" : 'border px-4'}>
                            <i>Hi</i>
                        </button>
                        {/* below buttons are not done */}
                        {/* <button
                        onClick={() => editor?.chain().focus().toggleBulletList().run()}
                        className={isItalic ? "bg-red-500 border px-4" : 'border px-4'}>
                        <i>•</i>
                    </button>
                    <button
                        onClick={() => editor?.chain().focus().toggleOrderedList().run()}
                        className={isItalic ? "bg-red-500 border px-4" : 'border px-4'}>
                        <i>1.</i>
                    </button>
                    <button
                        onClick={() => editor?.chain().focus().toggleItalic().run()}
                        className={isItalic ? "bg-red-500 border px-4" : 'border px-4'}>
                        <i>"</i>
                    </button>

                    <button
                        onClick={() => editor?.chain().focus().toggleItalic().run()}
                        className={isItalic ? "bg-red-500 border px-4" : 'border px-4'}>
                        <i>_</i>
                    </button>
                    <button
                        onClick={() => editor?.chain().focus().toggleItalic().run()}
                        className={isItalic ? "bg-red-500 border px-4" : 'border px-4'}>
                        <i>↩</i>
                    </button>
                    <button
                        onClick={() => editor?.chain().focus().toggleItalic().run()}
                        className={isItalic ? "bg-red-500 border px-4" : 'border px-4'}>
                        <i>↪</i>
                    </button> */}
                    </div>
                </BubbleMenu>
            )}
            <EditorContent editor={editor} className='border min-w-100 min-h-50' />
        </div>
    )
}

export default RichTextEditor