import React, { useEffect, useState } from 'react'
import { Dimensions, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {QuestionsData} from '../constants/QuestionsData'

const {height, width} = Dimensions.get("window");

const Quiz = () => {

    const [index, setIndex] = useState(0);
    const [isComplete, setComplete] = useState(false);
    const [nextQuestionId, setNextQuestionId] = useState(0);

    useEffect(() => {
    })

    const handleNextPress = () => {
        setIndex(nextQuestionId)
    }
    const handlePrevPress = () => {

    }

    const handleOptionPress = (option) => {
        setNextQuestionId(parseInt(option['next_question']))
        if (nextQuestionId != -1) {
            // highlight button
            console.log(nextQuestionId);
        }
        else {
            setComplete(true)
        }
        
    }

    return (
        <SafeAreaView style={styles.container}>  
            <View style={styles.banner}>
                <View>
                    <Text style={{flex: 'none'}}>Back</Text>
                </View>
                <View>
                    <Text style={styles.bannerText}>Create New Report</Text>
                </View>
                
            </View> 
            <View style={styles.contentContainer}>
                <View style={styles.questionContainer}>
                    <Text style={styles.question}>Q. {QuestionsData[index]['question']}</Text>
                </View>
                <View style={styles.optionsContainer}>
                    {
                    QuestionsData[index]['options'].map( (option) => 
                    <TouchableOpacity key={option.option_text} style={styles.optionButton} onPress={()=>{handleOptionPress(option)}}>
                        <Text style={styles.option}>{option.option_text}</Text>
                    </TouchableOpacity>
                    )}
                </View>
                <View style={styles.bottom}>
                    <TouchableOpacity style={styles.navigateButton} onPress={handlePrevPress}>
                        <Text style={styles.navigateText}>
                            Previous
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.navigateButton} onPress={handleNextPress}>
                        <Text style={styles.navigateText}>
                            {/* {isComplete? 'Submit': 'Next'} */}
                            Next
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
    },
    banner: {
        alignItems: 'center',
        justifyContent: 'center',
        height: height * 0.075,
        flexDirection: 'row'
    },
    bannerText: {
        color:'black',
        fontSize: 24,
    },
    contentContainer: {
        flex: 1,
        padding: 20,
    },
    optionsContainer: {
        flex:6,
    },
    questionContainer: {
        flex: 3,
        borderWidth: 2.5,
        height: height * 0.3,
        marginBottom: 20,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 15
    },
    question: {
        fontSize: 20
    },
    optionButton: {
        borderWidth: 2.5,
        backgroundColor: 'white',
        height: height * 0.08,
        marginVertical: 7,
        paddingVertical: 10,
        paddingHorizontal: 10,
        justifyContent: 'center',
        borderRadius: 15,
        "&:OnTouch": {
            backgroundColor: 'green'
        }
    },
    option: {
        fontSize: 15
    },
    bottom: {
        flex: 1,
        justifyContent: 'space-between',
        paddingVerical: 15,
        flexDirection: 'row',
    },
    navigateButton: {
        backgroundColor: '#009d7a',
        width: width * 0.25,
        justifyContent: 'center',
        borderRadius: 15,
        alignItems: 'center'
    },
    navigateText: {
        color: 'white',
        fontSize: 15
    }

});
export default Quiz