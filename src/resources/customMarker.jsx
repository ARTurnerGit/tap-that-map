const customMarker = {
  path:
    "M 2.061 3.213 L 2.012 3.213 A 0.105 0.105 0 0 0 1.974 3.221 Q 1.941 3.234 1.899 3.268 A 0.702 0.702 0 0 0 1.855 3.306 Q 1.772 3.385 1.677 3.498 A 3.584 3.584 0 0 0 1.646 3.535 A 5.066 5.066 0 0 0 1.531 3.68 A 6.55 6.55 0 0 0 1.411 3.843 Q 1.289 4.014 1.172 4.185 A 5.656 5.656 0 0 0 1.077 4.328 Q 1.035 4.393 0.999 4.453 A 3.122 3.122 0 0 0 0.977 4.492 A 3.429 3.429 0 0 0 0.931 4.557 Q 0.884 4.627 0.856 4.677 A 0.735 0.735 0 0 0 0.84 4.707 Q 0.781 4.775 0.703 4.956 A 27.114 27.114 0 0 1 0.58 5.235 A 30.741 30.741 0 0 1 0.537 5.332 A 3.245 3.245 0 0 1 0.435 5.539 A 2.588 2.588 0 0 1 0.352 5.684 A 1.117 1.117 0 0 1 0.31 5.745 Q 0.245 5.836 0.195 5.856 A 0.09 0.09 0 0 1 0.186 5.859 A 0.254 0.254 0 0 1 0.132 5.854 Q 0.06 5.839 0.034 5.776 Q 0 5.693 0 5.557 A 1.553 1.553 0 0 1 0.06 5.138 A 2.143 2.143 0 0 1 0.19 4.795 A 5.661 5.661 0 0 1 0.51 4.217 A 6.626 6.626 0 0 1 0.659 3.989 A 11.751 11.751 0 0 1 1.24 3.213 A 110.563 110.563 0 0 0 1.492 2.903 Q 1.646 2.714 1.777 2.549 A 0.699 0.699 0 0 0 1.759 2.395 Q 1.744 2.326 1.715 2.252 A 1.299 1.299 0 0 0 1.694 2.202 A 2.679 2.679 0 0 0 1.573 1.96 A 3.27 3.27 0 0 0 1.484 1.812 A 10.893 10.893 0 0 0 1.283 1.506 A 12.217 12.217 0 0 0 1.211 1.401 Q 1.064 1.191 0.938 0.991 A 3.11 3.11 0 0 1 0.796 0.745 A 2.551 2.551 0 0 1 0.728 0.601 A 1.048 1.048 0 0 1 0.665 0.414 A 0.81 0.81 0 0 1 0.645 0.234 A 0.647 0.647 0 0 1 0.647 0.173 Q 0.653 0.109 0.673 0.069 A 0.166 0.166 0 0 1 0.679 0.059 A 0.096 0.096 0 0 1 0.721 0.021 Q 0.756 0.004 0.814 0.001 A 0.489 0.489 0 0 1 0.84 0 A 0.085 0.085 0 0 1 0.867 0.012 Q 0.906 0.035 0.964 0.105 A 1.24 1.24 0 0 1 0.981 0.127 Q 1.074 0.244 1.187 0.42 A 12.821 12.821 0 0 1 1.301 0.603 A 15.685 15.685 0 0 1 1.421 0.801 A 20.306 20.306 0 0 1 1.596 1.1 A 17.774 17.774 0 0 1 1.65 1.196 Q 1.743 1.36 1.821 1.488 A 6.466 6.466 0 0 0 1.846 1.528 A 5.929 5.929 0 0 0 1.884 1.59 Q 1.932 1.665 1.961 1.704 A 0.54 0.54 0 0 0 1.973 1.719 A 1.271 1.271 0 0 0 2.037 1.824 Q 2.104 1.92 2.173 1.973 Q 2.259 2.038 2.407 1.983 A 0.654 0.654 0 0 0 2.466 1.958 A 1.186 1.186 0 0 0 2.581 1.892 Q 2.75 1.785 2.998 1.572 Q 3.34 1.279 3.906 0.713 Q 3.975 0.654 4.15 0.547 Q 4.326 0.439 4.517 0.376 Q 4.662 0.327 4.794 0.327 A 0.68 0.68 0 0 1 4.873 0.332 Q 5.038 0.351 5.068 0.544 A 0.479 0.479 0 0 1 5.068 0.547 A 13.013 13.013 0 0 0 4.747 0.754 A 16.059 16.059 0 0 0 4.409 0.986 A 11.19 11.19 0 0 0 3.726 1.509 A 13.794 13.794 0 0 0 3.076 2.08 A 6.039 6.039 0 0 0 2.761 2.398 A 4.678 4.678 0 0 0 2.539 2.656 Q 2.627 2.9 2.837 3.208 A 14.017 14.017 0 0 0 3.271 3.809 A 15.371 15.371 0 0 0 3.286 3.828 A 88.88 88.88 0 0 0 3.637 4.283 A 79.497 79.497 0 0 0 3.75 4.429 A 5.842 5.842 0 0 1 3.891 4.617 Q 4.013 4.787 4.087 4.922 A 1.124 1.124 0 0 1 4.123 4.994 Q 4.192 5.144 4.16 5.22 Q 4.124 5.305 3.875 5.246 A 1.632 1.632 0 0 1 3.828 5.234 A 3.095 3.095 0 0 1 3.435 4.872 A 3.507 3.507 0 0 1 3.35 4.775 A 9.804 9.804 0 0 1 2.92 4.233 A 17.361 17.361 0 0 0 2.5 3.687 A 4.448 4.448 0 0 0 2.228 3.376 A 3.7 3.7 0 0 0 2.061 3.213 Z",
  fillColor: "red",
  strokeColor: "red",
  strokeWeight: 5,
  scale: 5,
};

export default customMarker;