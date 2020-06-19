import { expect } from '@integration/testing-tools';
import { Ensure, equals } from '@serenity-js/assertions';
import { actorCalled } from '@serenity-js/core';
import { by } from 'protractor';

import { Navigate, Target, Text } from '../../../src';
import { pageFromTemplate } from '../../fixtures';

describe('Text', () => {

    describe('of', () => {

        const Header = Target.the('header').located(by.tagName('h1'));

        /** @test {Text} */
        /** @test {Text.of} */
        it('allows the actor to read the text of the DOM element matching the locator', () => actorCalled('Bernie').attemptsTo(
            Navigate.to(pageFromTemplate(`
                <html>
                <body>
                    <h1>Hello World!</h1>
                </body>
                </html>
            `)),

            Ensure.that(Text.of(Header), equals('Hello World!')),
        ));

        it('produces a sensible description of the question being asked', () => {
            expect(Text.of(Target.the('header').located(by.tagName('h1'))).toString())
                .to.equal('the text of the header');
        });
    });

    describe('ofAll', () => {

        const Shopping_List_Items = Target.all('shopping list items').located(by.css('li'));
        const Payment_Methods_Items = Target.all('Payment method items').located(by.css('select'));

        const testPage = pageFromTemplate(`
                <html>
                <body>
                    <h1>Shopping list</h1>
                    <ul>
                        <li>milk</li>
                        <li>oats</li>
                    </ul>
                    <select>
                        <h1>Payment method</h1>
                        <option>Please select...</option>
                        <option>Credit card</option>
                        <option>Pre-Paid card</option>
                        <option>Other</option>
                    </select>
                </body>
                </html>
            `);

        /** @test {Text} */
        /** @test {Text.ofAll} */
        it('allows the actor to read the text of all DOM elements matching the locator', () => actorCalled('Bernie').attemptsTo(
            Navigate.to(testPage),

            Ensure.that(Text.ofAll(Shopping_List_Items), equals(['milk', 'oats'])),
        ));

        /** @test {Text} */
        /** @test {Text.ofAll} */
        it('allows for a question relative to another target to be asked', () => actorCalled('Bernie').attemptsTo(
            Navigate.to(testPage),

            Ensure.that(Text.ofAll(Shopping_List_Items).of(Target.the('body').located(by.tagName('body'))), equals(['milk', 'oats'])),
        ));

        /** @test {Text} */
        /** @test {Text.ofAll} */
        it('ensures that a question returns an array', () => actorCalled('Bernie').attemptsTo(
            Navigate.to(testPage),

            Ensure.that(Text.ofAll(Payment_Methods_Items).of(Target.the('body').located(by.tagName('body'))),
                equals(['Please select...', 'Credit card', 'Pre-Paid card', 'Other'])),
        ));

        /** @test {Text} */
        /** @test {Text.ofAll} */
        /** @test {Text#toString} */
        it('produces sensible description of the question being asked', () => {
            expect(Text.ofAll(Shopping_List_Items).toString())
                .to.equal('the text of the shopping list items');
        });
    });
});
