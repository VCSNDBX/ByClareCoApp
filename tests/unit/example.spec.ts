import { mount } from '@vue/test-utils'
import HomePage from '@/views/HomePage.vue'

describe('HomePage.vue', () => {
  it('renders HomePage', () => {
    const wrapper = mount(HomePage)
    expect(wrapper.text()).toMatch('Home page')
  })
})
