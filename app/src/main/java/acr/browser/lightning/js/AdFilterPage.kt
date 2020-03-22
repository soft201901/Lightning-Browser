package acr.browser.lightning.js

import com.anthonycr.mezzanine.FileStream


@FileStream("app/src/main/js/AdFilterPage.js")
interface AdFilterPage {
    fun provideJs(): String

}