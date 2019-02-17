const graphql = require('graphql');
const _ = require('lodash');
const Edition = require('../models/edition');
const Ayat = require('../models/ayat');
const Sajda = require('../models/sajda');
const Surat = require('../models/surat');
const {
    GraphQLSchema, 
    GraphQLObjectType, 
    GraphQLString,
    GraphQLInt, 
    GraphQLList,
} = graphql;

const EditionType = new GraphQLObjectType({
    name: 'Edition',
    fields:()=> ({
            identifier:{type:GraphQLString},
            _id:{type:GraphQLInt},  
            language:{type:GraphQLString},
            englishname:{type:GraphQLString},
            format:{type:GraphQLString},
            type:{type:GraphQLString},
            media:{type:GraphQLString},
            source:{type:GraphQLString},
            lastupdated:{type:GraphQLString},
            name:{type:GraphQLString},
    }),
});

const SajdaType = new GraphQLObjectType({
    name: 'Sajda',
    fields:()=> ({
        recommended:{type:GraphQLInt},
        obligatory:{type:GraphQLInt},
    }),
});


const SuratType = new GraphQLObjectType({
    name: 'Surat',
    fields:()=> ({
        _id:{type:GraphQLInt},
        name:{type:GraphQLString},
        englishname:{type:GraphQLString},
        englishtranslation:{type:GraphQLString},
        revealationCity:{type:GraphQLString},
        numberOfAyats:{type:GraphQLInt},
    }),
});


const AyatType = new GraphQLObjectType({
    name: 'Ayat',
    fields:()=> ({
        _id:{type:GraphQLInt},
        edition_id: {type:GraphQLInt},
        juz_id: {type:GraphQLInt},
        manzil_id: {type:GraphQLInt},
        page_id: {type:GraphQLInt},
        ruku_id: {type:GraphQLInt},
        hizbQuarter_id: {type:GraphQLInt},
        number: {type:GraphQLInt},
        text:{type:GraphQLString},
        numberinsurat:{type:GraphQLInt},
       
        sajda: {
            type: SajdaType ,
            resolve(parent,args){
                return Sajda.findOne({_id:parent.sajda_id});
            }
        },
        
        edition: {
            type: EditionType,
            resolve(parent,args){
                return Edition.findOne({_id:parent.edition_id});
            }
        },

        surat: {
            type: SuratType,
            resolve(parent,args){
                return Surat.findOne({_id:parent.surat_id});
            }
        },
       
    }),
});







const RootQuery = new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
        edition:{
            type: new GraphQLList (EditionType),
            args:{
                identifier:{type:GraphQLString},
                language: {type:GraphQLString},
                type:{type:GraphQLString},
                source:{type:GraphQLString},
                format:{type:GraphQLString},
            },
            resolve:async function(parent,args) {
                const editions = await Edition.find(args);
                return editions;
              },
        },
        editions:{
            type: new GraphQLList (EditionType),
            resolve:async function(parent,args) {
                const editions = await Edition.find();
                return editions;
              },
        },
        quran:{
            type: new GraphQLList (AyatType),
            args:{
                edition_id:{type:GraphQLInt},
                surat_id:{type:GraphQLInt},
                juz_id:{type:GraphQLInt},
                manzil_id:{type:GraphQLInt},
                page_id:{type:GraphQLInt},
                hizbQuarter_id:{type:GraphQLInt},
                sajda_id:{type:GraphQLInt},
                ruku_id:{type:GraphQLInt},
            },
            resolve:async function(parent,args) {
                // const edition = await Edition.findOne({identifier:args.edition});
                // const edition_id  = edition._id;
                // console.log(edition_id);
                const ayats = await Ayat.find(args).sort( { number: 1 });
                return ayats;
              },
        },
        surat:{
            type: new GraphQLList (SuratType),
            args:{
                _id:{type:GraphQLInt},
                name:{type:GraphQLString},
                englishname:{type:GraphQLString},
                englishtranslation:{type:GraphQLString},
                revealationCity:{type:GraphQLString},
            },
            resolve:async function(parent,args) {
                const surats = await Surat.find(args);
                return surats;
              },
        },
        surats:{
            type: new GraphQLList (SuratType),
            resolve:async function(parent,args) {
                const surats = await Surat.find();
                return surats;
              },
        },








        }
});


module.exports = new GraphQLSchema({
    query:RootQuery,
    //mutation:Mutation
});