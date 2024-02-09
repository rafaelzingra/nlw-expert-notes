export function NoteCard(){
    return(
        <button className=' text-left rounded-md bg-slate-800 p-5 space-y-3 overflow-hidden relative outline-none hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400'>
            <span className='text-sm font-medium text-slate-300'>
                Há 2 dias
            </span>
            <p className='text-sm leading-6 text-slate-100'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates inventore rem ad fuga nulla doloribus, beatae officia vitae a, fugit pariatur illum quam amet placeat eaque, distinctio voluptate neque maxime! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates inventore rem ad fuga nulla doloribus, beatae officia vitae a, fugit pariatur illum quam amet placeat eaque, distinctio voluptate neque maxime!
            </p>
            <div className='absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none'></div>
        </button>
        )
}   