import React from 'react'

const PscBulletinCa = () => {
    const bulletin = [
        {
            qn:"1. 2026-ലെ രഞ്ജി ട്രോഫി ക്രിക്കറ്റ് കിരീടം സ്വന്തമാക്കിയത് ?",
            ans:"ജമ്മു കാശ്മീർ "
        },
        {
        qn:"2. കായികരംഗത്തെ വിഖ്യാത പുരസ്കാരമായ ലോറസിന് നാമനിർദ്ദേശം ചെയ്യപ്പെട്ടത്?",
        ans:" ഇന്ത്യൻ വനിതാ ക്രിക്കറ്റ് ടീം"
        },
        {
            qn:"3. 2026-ൽ ഐക്യരാഷ്ട്രസഭയുടെ ഗ്ലോബൽ ചാമ്പ്യൻ ഫോർ റോഡ് സേഫ്റ്റി ആയി നിയമിച്ചത്?",
        ans:" സച്ചിൻ തെണ്ടുൽക്കർ"

        },
        {
           qn: "2026-ലെ പ്രഥമ ഖേലോ ഇന്ത്യ ട്രൈബൽ ഗെയിംസിന് വേദിയാകുന്നത്?",
ans:"ഛത്തീസ്ഗഢ്"
        }
    ]
  return (
   <>
   {bulletin.map((qtn,index)=>(
    <div key={index} className='p-2'>
        <p className='p-1'>{qtn.qn}</p>
        <p className='p-1'>{qtn.ans}</p>

    </div>

   ))}

   </>
  )
}

export default PscBulletinCa