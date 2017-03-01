import React from 'react';
import { observable, action } from 'mobx';
import GlobalLayout from './GlobalLayout/GlobalLayout';

class GigStore {

    gigs = [];

    addGig(event) {
        if(event) {
            this.gigs.push(event);
        }
    }

    removeGig(event) {
        if(event) {
            for (let i = 0; i < this.gigs.length; i++) {
                if(event == this.gigs[i]) {
                    this.gigs.splice(i, 1);
                }
            }
        }
    }

}

const gigStore = new GigStore();

export default gigStore;