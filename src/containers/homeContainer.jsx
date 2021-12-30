import React, { useEffect } from 'react';
import { Home } from '../components';
import FinpathLogo from '../assets/finpath_logo.svg';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { projectsAdded } from '../store/projects';
import { useSelector, useDispatch } from 'react-redux';

export const HomeContainer = ({navigation}) => {
    const projectAdd = useSelector(projectsAdded);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(projectsAdded({name: 'Project 1'}))
    }, [])
    

    function handleSwiper () {
        AsyncStorage.getItem('userId').then(data => {
            return data ? navigation.navigate('Login') : navigation.navigate('Swiper');
        });
    }

    
    // useEffect(()=> {


        // store.dispatch(userAdded({name: 'user 1'}));
        // store.dispatch(userAdded({name: 'user 2'}));
        // store.dispatch(userAdded({name: 'user 3'}));
        // store.dispatch(projectAdded({name: 'Project 1'}));
        // store.dispatch(projectAdded({name: 'Project 2'}));
        // store.dispatch(projectAdded({name: 'Project 3'}));
        // store.dispatch(bugAdded({description: 'bug1'}));
        // store.dispatch(bugAdded({description: 'bug2'}));
        // store.dispatch(bugAdded({description: 'bug3'}));
        // store.dispatch(bugAssignToUser({bugId: 1, userId: 1}))

        // store.dispatch(bugResolved({id: 1}))
        // store.dispatch(projectResolved({id: 1}))

        // const unresolvedBugs = getUnresolvedBugs(store.getState());
        // const unresolvedBugs2 = getUnresolvedBugs(store.getState());
        // console.log('bug', unresolvedBugs === unresolvedBugs2);

        // console.log('project', getUnresolvedProject(store.getState()))

        // const bug = getBugByUser(1)(store.getState());

        // store.dispatch( (dispatch, getState ) => {
        //     dispatch({type: 'bugAdded', bug: [1, 2, 3]})
        //     console.log('store', getState());
        // }) 

        // store.dispatch((dispatch, getState) => {
        //     dispatch({type: 'newBug', newBug: ['hello']})
        //     console.log('newBuug', getState())
        // })

        // store.dispatch((dispatch, getState) => {
        //     dispatch({
        //         type: 'error',
        //         payload: { message: 'An error occured.' }
        //     });
        // })
        
    //     console.log(store.getState())
    // }, [])

    return (
        <Home>
            <Home.Container>
                <Home.LogoBox>
                    <FinpathLogo />
                </Home.LogoBox>
                
                <Home.Frame>
                    <Home.Title>Welcome</Home.Title>
                    <Home.SubTitle>Global Social Payments Application for cryptocurrencies Payments</Home.SubTitle>
                </Home.Frame>
                <Home.RegularButton mode='contained' onPress={handleSwiper}>
                    <Home.ButtonText>Login</Home.ButtonText>
                </Home.RegularButton>
            </Home.Container>
        </Home>
    )
}