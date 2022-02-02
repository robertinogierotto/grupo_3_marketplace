const main = {
    home: (req,res) => {
        res.render ('home', { styles: 'styles-home.css'})
    },
    whoWeAre: (req,res) => {
        res.render ('whoWeAre', { styles: 'styles-whoWeAre.css'} )
    },
}





module.exports = main;